import Link from 'next/link'
import { ArrowRight, CircuitBoard, Cpu, Database, Globe, Lock, Zap } from 'lucide-react'

import { Button } from '@/components/ui/button'
import Login from '@/components/Login'

export default function Home () {
  return (
    <div className='flex min-h-screen flex-col bg-black text-white'>
      <header className='sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60'>
        <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
          <div className='flex gap-2 items-center text-xl font-bold'>
            <div className='relative h-8 w-8'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-70' />
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='h-5 w-5 rounded-full bg-black' />
              </div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='h-2 w-2 rounded-full bg-white' />
              </div>
            </div>
            <span className='text-lg'>Nexus</span>
          </div>
          <div className='flex flex-1 items-center justify-end space-x-4'>
            <nav className='flex items-center space-x-2'>
              <Link href='#features' className='text-sm font-medium text-zinc-400 transition-colors hover:text-white'>
                Features
              </Link>
              <Link
                href='#how-it-works'
                className='text-sm font-medium text-zinc-400 transition-colors hover:text-white'
              >
                How It Works
              </Link>
              <Link href='#benefits' className='text-sm font-medium text-zinc-400 transition-colors hover:text-white'>
                Benefits
              </Link>
              <Button
                size='sm'
                variant='outline'
                className='border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white'
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b border-white/10'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-8 lg:grid-cols-2 lg:gap-12'>
              {/* Left column: Content */}
              <div className='flex flex-col justify-center space-y-6'>
                <div className='space-y-4'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                    Red de Logística Autónoma con Economía Máquina-a-Máquina
                  </h1>
                  <p className='text-zinc-400 md:text-xl'>
                    Una solución blockchain que permite a dispositivos IoT y agentes autónomos intercambiar servicios en
                    una economía descentralizada.
                  </p>
                </div>
                <div className='flex flex-col gap-3 sm:flex-row'>
                  <Button className='bg-white text-black hover:bg-zinc-200 px-6' size='lg'>
                    Comenzar Ahora
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    className='border-zinc-800 bg-transparent text-white hover:bg-zinc-900'
                  >
                    Ver Demostración
                  </Button>
                </div>
              </div>

              {/* Right column: Login form */}
              <div className='flex items-center justify-center'>
                <Login />
              </div>
            </div>

            {/* Network visualization below both columns */}
            <div className='mt-16 flex justify-center'>
              <div className='relative h-[400px] w-[400px]'>
                <div
                  className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-10 blur-3xl'
                />

                {/* Central node with circuit board icon */}
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='h-24 w-24 rounded-full bg-zinc-900 flex items-center justify-center'>
                    <CircuitBoard className='h-12 w-12 text-white' />
                  </div>
                </div>

                {/* Circular orbit */}
                <div
                  className='absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10'
                />

                {/* Nodes on the orbit */}
                {[0, 90, 180, 270].map((angle, i) => {
                  const icon = [
                    <Lock key='lock' className='h-5 w-5' />,
                    <Cpu key='cpu' className='h-5 w-5' />,
                    <Database key='database' className='h-5 w-5' />,
                    <Globe key='globe' className='h-5 w-5' />
                  ][i]

                  const rad = (angle * Math.PI) / 180
                  const x = Math.cos(rad) * 150
                  const y = Math.sin(rad) * 150

                  return (
                      <div
                        key={angle}
                        className='absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center'
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                      >
                        <div
                          className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        >
                          {icon}
                        </div>
                      </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        <section id='features' className='w-full py-12 md:py-24 lg:py-32 border-b border-white/10'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-zinc-900 px-3 py-1 text-sm text-zinc-400'>
                  Características
                </div>
                <h2 className='text-2xl font-bold tracking-tighter sm:text-4xl'>Tecnología Revolucionaria</h2>
                <p className='max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Nuestra plataforma blockchain integra dispositivos IoT y agentes autónomos en una red de logística
                  descentralizada.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
              <div
                className='flex flex-col items-center space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6'
              >
                <div
                  className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20'
                >
                  <CircuitBoard className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-bold'>Blockchain Segura</h3>
                <p className='text-center text-zinc-400'>
                  Transacciones seguras y transparentes con tecnología blockchain de última generación.
                </p>
              </div>
              <div
                className='flex flex-col items-center space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6'
              >
                <div
                  className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20'
                >
                  <Cpu className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-bold'>Dispositivos IoT</h3>
                <p className='text-center text-zinc-400'>
                  Integración perfecta con dispositivos IoT para monitoreo y automatización en tiempo real.
                </p>
              </div>
              <div
                className='flex flex-col items-center space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6'
              >
                <div
                  className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20'
                >
                  <Zap className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-xl font-bold'>Economía M2M</h3>
                <p className='text-center text-zinc-400'>
                  Economía máquina-a-máquina que permite transacciones autónomas entre dispositivos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id='how-it-works' className='w-full lg:flex py-12 md:py-24 lg:py-32 border-b border-white/10'>
          <div className='container px-4 md:px-6 w-full'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-zinc-900 px-3 py-1 text-sm text-zinc-400'>Cómo Funciona</div>
                <h2 className='text-2xl font-bold tracking-tighter sm:text-4xl'>Proceso Simplificado</h2>
                <p className='max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Descubra cómo nuestra tecnología blockchain revoluciona la logística autónoma.
                </p>
              </div>
            </div>
            <div className='mx-auto max-w-3xl space-y-8 py-12'>
              <div className='flex flex-col gap-4 md:flex-row md:items-center'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-bold text-white'>
                  1
                </div>
                <div className='border-l-2 border-dashed border-zinc-800 pl-8 md:border-l-0 md:border-t-2 md:pl-0 md:pt-8'>
                  <h3 className='text-xl font-bold'>Conexión de Dispositivos</h3>
                  <p className='text-zinc-400'>
                    Los dispositivos IoT se conectan a la red blockchain y establecen su identidad digital.
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-4 md:flex-row md:items-center'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-bold text-white'>
                  2
                </div>
                <div className='border-l-2 border-dashed border-zinc-800 pl-8 md:border-l-0 md:border-t-2 md:pl-0 md:pt-8'>
                  <h3 className='text-xl font-bold'>Contratos Inteligentes</h3>
                  <p className='text-zinc-400'>
                    Los contratos inteligentes definen las reglas para el intercambio de servicios entre dispositivos.
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-4 md:flex-row md:items-center'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-bold text-white'>
                  3
                </div>
                <div className='border-l-2 border-dashed border-zinc-800 pl-8 md:border-l-0 md:border-t-2 md:pl-0 md:pt-8'>
                  <h3 className='text-xl font-bold'>Transacciones Autónomas</h3>
                  <p className='text-zinc-400'>
                    Los dispositivos y agentes autónomos intercambian servicios y valor sin intervención humana.
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-4 md:flex-row md:items-center'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-bold text-white'>
                  4
                </div>
                <div className='border-l-2 border-dashed border-zinc-800 pl-8 md:border-l-0 md:border-t-2 md:pl-0 md:pt-8'>
                  <h3 className='text-xl font-bold'>Optimización Continua</h3>
                  <p className='text-zinc-400'>
                    El sistema aprende y optimiza las rutas logísticas y procesos en tiempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='benefits' className='w-full py-12 md:py-24 lg:py-32 border-b border-white/10'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-zinc-900 px-3 py-1 text-sm text-zinc-400'>Beneficios</div>
                <h2 className='text-2xl font-bold tracking-tighter sm:text-4xl'>Ventajas Competitivas</h2>
                <p className='max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Descubra por qué nuestra solución blockchain está transformando la industria logística.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4'>
              <div className='flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6'>
                <h3 className='text-xl font-bold'>Eficiencia</h3>
                <p className='text-center text-zinc-400'>
                  Reducción de costos operativos hasta un 40% mediante la automatización de procesos.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6'>
                <h3 className='text-xl font-bold'>Seguridad</h3>
                <p className='text-center text-zinc-400'>
                  Protección de datos y transacciones con criptografía avanzada y consenso distribuido.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6'>
                <h3 className='text-xl font-bold'>Transparencia</h3>
                <p className='text-center text-zinc-400'>
                  Visibilidad completa de la cadena de suministro con registros inmutables en blockchain.
                </p>
              </div>
              <div className='flex flex-col items-center space-y-2 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6'>
                <h3 className='text-xl font-bold'>Escalabilidad</h3>
                <p className='text-center text-zinc-400'>
                  Arquitectura diseñada para crecer con su negocio, desde pequeñas flotas hasta operaciones globales.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id='architecture' className='w-full py-12 md:py-24 lg:py-32 border-b border-white/10'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-zinc-900 px-3 py-1 text-sm text-zinc-400'>Tecnología</div>
                <h2 className='text-2xl font-bold tracking-tighter sm:text-4xl'>Arquitectura Avanzada</h2>
                <p className='max-w-[900px] text-zinc-400 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed'>
                  Nuestra infraestructura blockchain está diseñada para ofrecer máximo rendimiento y seguridad.
                </p>
              </div>
            </div>
            <div className='mx-auto max-w-5xl py-12'>
              <div className='relative h-[500px] w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 p-2'>
                {/* Grid Lines */}
                <div className='absolute inset-0'>
                  <div className='grid h-full w-full grid-cols-6 grid-rows-6'>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={`col-${i}`} className='border-r border-zinc-800/30' />
                    ))}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={`row-${i}`} className='border-b border-zinc-800/30' />
                    ))}
                  </div>
                </div>

                {/* Central Node */}
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='relative h-32 w-32'>
                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl' />
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='h-24 w-24 rounded-full border border-zinc-700 bg-black'>
                        <div className='flex h-full w-full items-center justify-center'>
                          <div className='h-16 w-16 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-600/40'>
                            <div className='flex h-full w-full items-center justify-center'>
                              <div className='h-8 w-8 rounded-full bg-black' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection Lines */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = i * 45 * (Math.PI / 180)
                  const length = 200
                  const x2 = Math.cos(angle) * length
                  const y2 = Math.sin(angle) * length

                  return (
                    <div key={`line-${i}`} className='absolute left-1/2 top-1/2'>
                      <div
                        className='h-0.5 bg-gradient-to-r from-blue-500/30 to-purple-600/30 origin-left'
                        style={{
                          width: `${length}px`,
                          transform: `rotate(${angle * (180 / Math.PI)}deg)`
                        }}
                      />
                    </div>
                  )
                })}

                {/* Outer Nodes */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = i * 45 * (Math.PI / 180)
                  const distance = 200
                  const x = Math.cos(angle) * distance
                  const y = Math.sin(angle) * distance

                  return (
                    <div
                      key={`node-${i}`}
                      className='absolute h-12 w-12'
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`
                      }}
                    >
                      <div className='h-full w-full rounded-full border border-zinc-700 bg-black'>
                        <div className='flex h-full w-full items-center justify-center'>
                          <div className='h-8 w-8 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-600/30'>
                            <div className='flex h-full w-full items-center justify-center'>
                              <div className='h-4 w-4 rounded-full bg-black' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* Pulse Animation */}
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='animate-ping h-32 w-32 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-75' />
                </div>

                {/* Legend */}
                <div className='absolute bottom-4 left-4 rounded-lg bg-black/80 p-3 text-xs'>
                  <div className='flex items-center gap-2 mb-1'>
                    <div className='h-3 w-3 rounded-full bg-gradient-to-r from-blue-500/40 to-purple-600/40' />
                    <span className='text-zinc-300'>Nodo Principal</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='h-3 w-3 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-600/30' />
                    <span className='text-zinc-300'>Nodos Secundarios</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 border-b border-white/10'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-zinc-900 px-3 py-1 text-sm text-zinc-400'>
                  Flujo de Datos
                </div>
                <h2 className='text-2xl font-bold tracking-tighter sm:text-4xl'>Intercambio de Información</h2>
                <p className='max-w-[900px] text-zinc-400 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed'>
                  Visualice cómo fluye la información entre dispositivos en nuestra red blockchain.
                </p>
              </div>
            </div>
            <div className='mx-auto max-w-5xl py-12'>
              <div className='relative h-[300px] w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30'>
                {/* Grid Background */}
                <div className='absolute inset-0'>
                  <div className='grid h-full w-full grid-cols-12 grid-rows-6'>
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={`col-${i}`} className='border-r border-zinc-800/30' />
                    ))}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={`row-${i}`} className='border-b border-zinc-800/30' />
                    ))}
                  </div>
                </div>

                {/* Horizontal Flow Line */}
                <div className='absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-blue-500/0 via-purple-600/50 to-blue-500/0' />

                {/* Data Points */}
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className='absolute top-1/2 -translate-y-1/2' style={{ left: `${i * 20 - 10}%` }}>
                    <div className='relative h-24 w-24'>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='h-16 w-16 rounded-full border border-zinc-700 bg-black'>
                          <div className='flex h-full w-full items-center justify-center'>
                            <div className='h-10 w-10 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-600/30'>
                              <div className='flex h-full w-full items-center justify-center'>
                                <div className='h-5 w-5 rounded-full bg-black' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-zinc-400'>
                        Punto {i}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Data Flow Arrows */}
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={`arrow-${i}`}
                    className='absolute top-1/2 -translate-y-1/2'
                    style={{ left: `${i * 20 + 5}%` }}
                  >
                    <div className='h-6 w-6 text-zinc-400'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M5 12h14' />
                        <path d='m12 5 7 7-7 7' />
                      </svg>
                    </div>
                  </div>
                ))}

                {/* Animated Pulse */}
                <div className='absolute left-[10%] top-1/2 -translate-y-1/2 animate-pulse'>
                  <div className='h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-600/5 blur-xl' />
                </div>
                <div className='absolute left-[50%] top-1/2 -translate-y-1/2 animate-pulse delay-700'>
                  <div className='h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-600/5 blur-xl' />
                </div>
                <div className='absolute left-[90%] top-1/2 -translate-y-1/2 animate-pulse delay-1000'>
                  <div className='h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/5 to-purple-600/5 blur-xl' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-zinc-900'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl'>
                  Comience su Transformación Digital Hoy
                </h2>
                <p className='mx-auto max-w-[700px] text-zinc-400 md:text-xl'>
                  Únase a las empresas líderes que ya están aprovechando el poder de la logística autónoma con
                  blockchain.
                </p>
              </div>
              <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                <Button className='bg-white text-black hover:bg-zinc-200' size='lg'>
                  Solicitar Demostración
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-zinc-800 bg-transparent text-white hover:bg-zinc-900'
                >
                  Contactar Ventas
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='w-full border-t border-white/10 py-6 md:py-0'>
        <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
          <p className='text-center text-sm leading-loose text-zinc-400 md:text-left'>
            © 2025 Nexus. Todos los derechos reservados.
          </p>
          <div className='flex items-center gap-4 text-sm text-zinc-400'>
            <Link href='#' className='underline underline-offset-4 hover:text-white'>
              Términos
            </Link>
            <Link href='#' className='underline underline-offset-4 hover:text-white'>
              Privacidad
            </Link>
            <Link href='#' className='underline underline-offset-4 hover:text-white'>
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
