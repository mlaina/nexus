'use client';
import { useState } from "react";

export default function ContractCreation() {
    const [role, setRole] = useState("client");
    const [counterpartyId, setCounterpartyId] = useState("");
    const [mode, setMode] = useState("single");
    const [milestones, setMilestones] = useState([]);
    const [singleDelivery, setSingleDelivery] = useState({
        name: "",
        description: "",
        amount: "",
        deadline: "",
        type: "",
        params: {},
    });

    const milestoneTypes = [
        { label: "Entrega de archivo", value: "file" },
        { label: "Entrega física / envío", value: "shipping" },
        { label: "Feature entregada", value: "feature" },
        { label: "Ventas alcanzadas", value: "sales" },
        { label: "Sesiones completadas", value: "sessions" },
        { label: "Evaluación técnica", value: "test" },
    ];

    const updateMilestone = (index, field, value) => {
        const updated = [...milestones];
        updated[index][field] = value;
        setMilestones(updated);
    };

    const updateMilestoneParam = (index, key, value) => {
        const updated = [...milestones];
        updated[index].params = {
            ...updated[index].params,
            [key]: value,
        };
        setMilestones(updated);
    };

    const removeMilestone = (index) => {
        const updated = milestones.filter((_, i) => i !== index);
        setMilestones(updated);
    };

    const updateSingleParam = (key, value) => {
        setSingleDelivery({
            ...singleDelivery,
            params: {
                ...singleDelivery.params,
                [key]: value,
            },
        });
    };

    const suggestMilestones = () => {
        // Aquí iría la llamada a una API que use ChatGPT para generar hitos
        // Por ahora usamos un mock de ejemplo
        const mockMilestones = [
            {
                name: "Diseño de la interfaz",
                description: "Entregar un diseño funcional de la interfaz de usuario",
                amount: "1000",
                deadline: "2025-04-01",
                type: "file",
                params: { url: "" },
            },
            {
                name: "Implementación del backend",
                description: "Entregar un API funcional con documentación",
                amount: "1500",
                deadline: "2025-04-10",
                type: "feature",
                params: { repo: "" },
            },
            {
                name: "Deploy y testing",
                description: "Deploy funcional y reporte de pruebas exitosas",
                amount: "1000",
                deadline: "2025-04-20",
                type: "test",
                params: { score: "80" },
            },
        ];
        setMilestones(mockMilestones);
        setMode("milestones");
    };

    const renderVerificationFields = (type, params, onChange) => {
        switch (type) {
            case "file":
                return (
                    <input type="text" className="w-full p-2 border rounded" placeholder="URL esperada de entrega" value={params.url || ""} onChange={(e) => onChange("url", e.target.value)} />
                );
            case "shipping":
                return (<><input type="text" className="w-full p-2 border rounded" placeholder="Número de tracking" value={params.tracking || ""} onChange={(e) => onChange("tracking", e.target.value)} /><input type="text" className="w-full p-2 border rounded" placeholder="Empresa de envío" value={params.carrier || ""} onChange={(e) => onChange("carrier", e.target.value)} /></>);
            case "feature":
                return (
                    <input type="text" className="w-full p-2 border rounded" placeholder="Nombre del repositorio o ID de PR" value={params.repo || ""} onChange={(e) => onChange("repo", e.target.value)} />
                );
            case "sales":
                return (
                    <input type="number" className="w-full p-2 border rounded" placeholder="Objetivo de ventas ($)" value={params.sales || ""} onChange={(e) => onChange("sales", e.target.value)} />
                );
            case "sessions":
                return (
                    <input type="number" className="w-full p-2 border rounded" placeholder="Número de sesiones requeridas" value={params.sessions || ""} onChange={(e) => onChange("sessions", e.target.value)} />
                );
            case "test":
                return (
                    <input type="number" className="w-full p-2 border rounded" placeholder="Puntaje mínimo" value={params.score || ""} onChange={(e) => onChange("score", e.target.value)} />
                );
            default:
                return null;
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-8">
            <h1 className="text-2xl font-bold">Crear Contrato Freelance</h1>

            <div className="flex gap-4">
                <button className={`px-4 py-2 rounded border ${role === "client" ? "bg-blue-600 text-white" : "bg-white text-black"}`} onClick={() => setRole("client")}>Soy el Cliente</button>
                <button className={`px-4 py-2 rounded border ${role === "freelancer" ? "bg-blue-600 text-white" : "bg-white text-black"}`} onClick={() => setRole("freelancer")}>Soy el Freelancer</button>
            </div>

            <div className="border p-4 rounded space-y-4">
                <label className="block text-sm font-medium">ID de {role === "client" ? "Freelancer" : "Cliente"}</label>
                <input type="text" className="w-full p-2 border rounded" value={counterpartyId} onChange={(e) => setCounterpartyId(e.target.value)} />
            </div>

            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Entrega Única o Sugerir Hitos</h2>
                <button onClick={suggestMilestones} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                    Sugerir hitos con IA
                </button>
            </div>

            {mode === "single" ? (
                <div className="border p-4 rounded space-y-4">
                    <h2 className="font-semibold text-lg">Entrega Única</h2>
                    <input type="text" className="w-full p-2 border rounded" placeholder="Nombre del objetivo" value={singleDelivery.name} onChange={(e) => setSingleDelivery({ ...singleDelivery, name: e.target.value })} />
                    <textarea className="w-full p-2 border rounded" placeholder="Descripción" value={singleDelivery.description} onChange={(e) => setSingleDelivery({ ...singleDelivery, description: e.target.value })}></textarea>
                    <input type="number" className="w-full p-2 border rounded" placeholder="Monto (USD)" value={singleDelivery.amount} onChange={(e) => setSingleDelivery({ ...singleDelivery, amount: e.target.value })} />
                    <input type="date" className="w-full p-2 border rounded" value={singleDelivery.deadline} onChange={(e) => setSingleDelivery({ ...singleDelivery, deadline: e.target.value })} />
                    <div>
                        <label className="block text-sm font-medium mb-1">Tipo de verificación</label>
                        <select className="w-full p-2 border rounded" value={singleDelivery.type} onChange={(e) => setSingleDelivery({ ...singleDelivery, type: e.target.value })}>
                            <option value="">Seleccionar tipo</option>
                            {milestoneTypes.map((type) => (
                                <option key={type.value} value={type.value}>{type.label}</option>
                            ))}
                        </select>
                    </div>
                    {renderVerificationFields(singleDelivery.type, singleDelivery.params, updateSingleParam)}
                </div>
            ) : (
                milestones.map((milestone, index) => (
                    <div key={index} className="border p-4 rounded space-y-4 relative">
                        <h2 className="font-semibold text-lg">Hito #{index + 1}</h2>
                        <button onClick={() => removeMilestone(index)} className="absolute top-2 right-2 text-red-600 hover:underline text-sm">Eliminar</button>
                        <input type="text" className="w-full p-2 border rounded" placeholder="Nombre del hito" value={milestone.name} onChange={(e) => updateMilestone(index, "name", e.target.value)} />
                        <textarea className="w-full p-2 border rounded" placeholder="Descripción" value={milestone.description} onChange={(e) => updateMilestone(index, "description", e.target.value)}></textarea>
                        <input type="number" className="w-full p-2 border rounded" placeholder="Monto (USD)" value={milestone.amount} onChange={(e) => updateMilestone(index, "amount", e.target.value)} />
                        <input type="date" className="w-full p-2 border rounded" value={milestone.deadline} onChange={(e) => updateMilestone(index, "deadline", e.target.value)} />
                        <div>
                            <label className="block text-sm font-medium mb-1">Tipo de verificación</label>
                            <select className="w-full p-2 border rounded" value={milestone.type} onChange={(e) => updateMilestone(index, "type", e.target.value)}>
                                <option value="">Seleccionar tipo</option>
                                {milestoneTypes.map((type) => (
                                    <option key={type.value} value={type.value}>{type.label}</option>
                                ))}
                            </select>
                        </div>
                        {renderVerificationFields(milestone.type, milestone.params, (k, v) => updateMilestoneParam(index, k, v))}
                    </div>
                ))
            )}

            <div className="flex justify-end pt-6">
                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                    Desplegar contrato
                </button>
            </div>
        </div>
    );
}
