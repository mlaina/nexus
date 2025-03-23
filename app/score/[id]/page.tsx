"use client"

import { useState } from "react"
import { CalendarDays, ArrowUpRight, Database, Shield, Activity, Download, FileText } from "lucide-react"

export default function BlockchainScoreDashboard() {
    // Example data - replace with real data
    const [userData] = useState({
        name: "Alex Johnson",
        score: 8.5,
        transactions: 124,
        lastTransaction: "2025-03-22T23:30:00",
        country: "Spain",
    })

    // Function to determine score color based on value
    const getScoreColor = (score: number) => {
        if (score >= 8) return "from-emerald-500 to-green-500"
        if (score >= 6) return "from-amber-500 to-yellow-500"
        return "from-red-500 to-rose-500"
    }

    // Format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return new Intl.DateTimeFormat("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).format(date)
    }

    // Function to handle certificate download
    const handleDownloadCertificate = () => {
        // In a real application, this would generate and download a certificate
        // For now, we'll just show an alert
        alert(
            "Certificate download initiated. In a production environment, this would generate a blockchain-verified trust certificate.",
        )

        // Alternatively, this could trigger a download of a pre-generated certificate
        // window.open('/api/generate-certificate', '_blank');
    }

    return (
        <div className="min-h-screen relative text-white overflow-hidden">
            {/* Background with blockchain-inspired elements */}
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-purple-900/20"></div>

                {/* Blockchain grid pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `
              linear-gradient(to right, #ffffff10 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff10 1px, transparent 1px)
            `,
                            backgroundSize: "40px 40px",
                        }}
                    ></div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-4 md:p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col gap-6">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-white">Qubic Trust Score</h1>
                                <p className="text-gray-400 mt-1">Decentralized activity analysis</p>
                            </div>
                            <div className="mt-2 md:mt-0 px-3 py-1 border border-gray-700 rounded-full flex items-center gap-1 text-sm bg-gray-900/50 backdrop-blur-sm">
                                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                <span>Live Data</span>
                            </div>
                        </div>

                        {/* Main card with score */}
                        <div className="border border-gray-800 rounded-xl shadow-lg bg-gray-900/70 backdrop-blur-sm p-6 md:p-8">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                {/* Score */}
                                <div className="flex-shrink-0">
                                    <div
                                        className={`relative rounded-full h-40 w-40 flex items-center justify-center bg-gradient-to-r ${getScoreColor(userData.score)}`}
                                    >
                                        <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
                                            <span className="text-5xl font-bold">{userData.score.toFixed(1)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* User information */}
                                <div className="flex-grow space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">{userData.name}</h2>
                                        <p>{userData.country}</p>
                                        <div className="mt-1 flex items-center text-sm text-gray-400">
                      <span className="inline-flex items-center gap-1">
                        <Shield className="h-4 w-4" />
                        Trust score based on blockchain activity
                      </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Blocks/Transactions */}
                                        <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                                            <div className="text-sm text-gray-400">Total Transactions Validated</div>
                                            <div className="mt-1 flex items-center">
                                                <span className="text-2xl font-semibold text-white">{userData.transactions}</span>
                                                <ArrowUpRight className="ml-2 h-4 w-4 text-green-500" />
                                            </div>
                                        </div>

                                        {/* Last transaction */}
                                        <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                                            <div className="text-sm text-gray-400">Last Ledger Entry</div>
                                            <div className="mt-1 flex items-center">
                                                <CalendarDays className="h-4 w-4 text-gray-400 mr-1" />
                                                <span className="text-white">{formatDate(userData.lastTransaction)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional info cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl shadow-md p-4">
                                <div className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                    <Shield className="h-4 w-4" />
                                    Security Level
                                </div>
                                <div className="mt-2 text-xl font-semibold text-white">
                                    {userData.score >= 8 ? "High" : userData.score >= 6 ? "Medium" : "Low"}
                                </div>
                            </div>

                            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl shadow-md p-4">
                                <div className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                    <Database className="h-4 w-4" />
                                    Current Renting
                                </div>
                                <div className="mt-2 text-xl font-semibold text-white">Madrid, Arganzuela</div>
                            </div>

                            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl shadow-md p-4">
                                <div className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                    <Activity className="h-4 w-4" />
                                    Network Trend
                                </div>
                                <div className="mt-2 text-xl font-semibold text-green-500">Positive</div>
                            </div>
                        </div>

                        {/* Certificate Download Button */}
                        <button
                            onClick={handleDownloadCertificate}
                            className="w-full py-4 px-6 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl text-white font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/20 group"
                        >
                            <FileText className="h-5 w-5 group-hover:animate-pulse" />
                            <span>Download Blockchain Verified Certificate</span>
                            <Download className="h-5 w-5 ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

