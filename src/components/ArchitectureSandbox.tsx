'use client';

import React, { useState } from 'react';
import { Layers, Play, CheckCircle2, RefreshCw, Cpu, Database, Server, Globe, Shield, ArrowRight } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  badge: string;
  description: string;
  steps: {
    node: string;
    action: string;
    latency: string;
    status: 'success' | 'cache-hit' | 'queued' | 'db-write';
  }[];
  activeNodes: string[];
  metrics: { p50: string; p99: string; memory: string; throughput: string };
}

export const ArchitectureSandbox: React.FC = () => {
  const scenarios: Scenario[] = [
    {
      id: 'nextjs-ssr',
      title: 'Next.js 15 Server Action & PPR Streaming',
      badge: 'Frontend Core',
      description: 'Zero-client bundle mutation with React 19 Server Actions, Partial Prerendering (PPR), and targeted cache tag revalidation.',
      activeNodes: ['client', 'edge', 'nextjs', 'redis', 'db'],
      steps: [
        { node: 'Global Shopper Browser', action: 'Initiates cart checkout mutation via Server Action', latency: '2ms', status: 'success' },
        { node: 'CloudFront Edge / CDN', action: 'Edge routing with TLS 1.3 & HTTP/3 termination', latency: '8ms', status: 'success' },
        { node: 'Next.js 15 App Router SSR', action: 'Executes Server Action, checks Zod schema & auth token', latency: '14ms', status: 'success' },
        { node: 'Redis Distributed Cache', action: 'Checks Redis Redlock for inventory availability', latency: '3ms', status: 'cache-hit' },
        { node: 'PostgreSQL DB Replica', action: 'Executes ACID transaction & invalidates cache tag', latency: '18ms', status: 'db-write' },
      ],
      metrics: { p50: '26ms', p99: '45ms', memory: '38 MB', throughput: '45,000 RPS' }
    },
    {
      id: 'node-stream',
      title: 'High-Concurrency Node.js Stream Ingestion',
      badge: 'Backend Concurrency',
      description: 'Ingesting 120k telemetry events/sec with non-blocking stream backpressure, Fastify gateway, and BullMQ worker pools.',
      activeNodes: ['client', 'edge', 'gateway', 'queue', 'workers', 'db'],
      steps: [
        { node: 'IoT & Client SDKs', action: 'Pushes 120,000 JSON telemetry events per second', latency: '4ms', status: 'success' },
        { node: 'CloudFront Edge / WAF', action: 'DDoS filtering & TCP socket connection pooling', latency: '6ms', status: 'success' },
        { node: 'Fastify API Gateway (Node.js)', action: 'Validates payload with TypeBox & applies sliding rate limit', latency: '5ms', status: 'success' },
        { node: 'Redis Streams Cluster', action: 'Buffers high-velocity event log via XADD', latency: '2ms', status: 'queued' },
        { node: 'BullMQ Worker Pool (Node.js)', action: 'Consumes batches with backpressure & worker threads', latency: '12ms', status: 'success' },
        { node: 'PostgreSQL Partitioned DB', action: 'Executes bulk COPY / batch UPSERT into time-series partitions', latency: '22ms', status: 'db-write' },
      ],
      metrics: { p50: '14ms', p99: '32ms', memory: '64 MB', throughput: '120,000 RPS' }
    },
    {
      id: 'redis-lock',
      title: 'Distributed Redlock & Sliding Rate Limiter',
      badge: 'Distributed Systems',
      description: 'Atomic Redis Lua script prevents concurrency double-spending and enforces sliding-window quotas across 10 auto-scaled pods.',
      activeNodes: ['client', 'gateway', 'redis'],
      steps: [
        { node: '10,000 Concurrency Spike', action: 'Simultaneous API requests hit rate limit gate', latency: '1ms', status: 'success' },
        { node: 'Fastify API Gateway (Node.js)', action: 'Invokes custom Redis Lua sliding-window rate command', latency: '3ms', status: 'success' },
        { node: 'Redis Cluster (Lua Engine)', action: 'Executes atomic ZREMRANGEBYSCORE & returns remaining quota', latency: '2ms', status: 'cache-hit' },
      ],
      metrics: { p50: '4ms', p99: '9ms', memory: '24 MB', throughput: '150,000 RPS' }
    },
    {
      id: 'realtime-ws',
      title: 'Real-Time WebSocket & Pub/Sub Broadcast',
      badge: 'Live Streaming',
      description: 'Distributed WebSocket gateway broadcasting collaborative edits and financial updates to 50k active subscribers with <20ms latency.',
      activeNodes: ['client', 'edge', 'nextjs', 'redis', 'workers'],
      steps: [
        { node: 'Multi-User Browser Clients', action: '50,000 concurrent clients connected via persistent WebSockets', latency: '3ms', status: 'success' },
        { node: 'Next.js 15 Client UI', action: 'Sends CRDT state delta payload', latency: '5ms', status: 'success' },
        { node: 'Redis Pub/Sub Layer', action: 'Fan-outs message across multi-region server shards', latency: '4ms', status: 'cache-hit' },
        { node: 'BullMQ Worker Pool (Node.js)', action: 'Dispatches instant broadcast to all subscriber sockets', latency: '7ms', status: 'success' },
      ],
      metrics: { p50: '12ms', p99: '21ms', memory: '48 MB', throughput: '80,000 msg/sec' }
    }
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>('nextjs-ssr');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const currentScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveStepIndex(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < currentScenario.steps.length) {
        setActiveStepIndex(step);
      } else {
        clearInterval(interval);
        setTimeout(() => setIsSimulating(false), 800);
      }
    }, 600);
  };

  const topologyNodes = [
    { id: 'client', label: 'Client / Global Browser', icon: Globe, subtext: 'React 19 / IoT Client' },
    { id: 'edge', label: 'CloudFront Edge / WAF', icon: Shield, subtext: 'TLS 1.3 & DDoS Guard' },
    { id: 'nextjs', label: 'Next.js 15 App Router', icon: Cpu, subtext: 'Server Actions & RSC' },
    { id: 'gateway', label: 'Fastify API Gateway', icon: Server, subtext: 'Node.js Microservices' },
    { id: 'redis', label: 'Redis Streams & Redlock', icon: Database, subtext: 'Distributed Cache / Lua' },
    { id: 'workers', label: 'BullMQ Worker Pool', icon: Layers, subtext: 'Node.js Worker Threads' },
    { id: 'db', label: 'PostgreSQL DB Replica', icon: Database, subtext: 'Partitioned Time-Series' },
  ];

  return (
    <section id="architecture" className="section-wrapper" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-emerald" style={{ marginBottom: '12px' }}>
            <Layers size={14} />
            <span>INTERACTIVE ARCHITECTURE SANDBOX</span>
          </div>
          <h2 className="section-title">
            Live Distributed System Flow Simulator
          </h2>
          <p className="section-subtitle">
            Simulate real-world production scenarios. Select a pipeline below to trace how requests traverse through Edge, Server Actions, Node.js worker pools, and Redis caching layers.
          </p>
        </div>

        {/* Scenario Selection Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            marginBottom: '36px',
          }}
        >
          {scenarios.map((sc) => {
            const isSelected = sc.id === activeScenarioId;
            return (
              <button
                key={sc.id}
                onClick={() => {
                  setActiveScenarioId(sc.id);
                  setActiveStepIndex(0);
                  setIsSimulating(false);
                }}
                style={{
                  background: isSelected ? 'rgba(0, 240, 255, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                  border: isSelected ? '1px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '16px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 0 25px rgba(0, 240, 255, 0.15)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="badge badge-cyan" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                    {sc.badge}
                  </span>
                  {isSelected && <div className="pulse-dot" />}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: isSelected ? '#38bdf8' : '#f8fafc', marginBottom: '4px' }}>
                  {sc.title}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.4 }}>
                  {sc.description.slice(0, 75)}...
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Simulation Dashboard Card */}
        <div
          className="glass-card"
          style={{
            padding: '32px',
            border: '1px solid rgba(0, 240, 255, 0.2)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
          }}
        >
          {/* Dashboard Control Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '32px',
              flexWrap: 'wrap',
              gap: '16px',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc' }}>
                {currentScenario.title}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '2px' }}>
                {currentScenario.description}
              </div>
            </div>

            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="btn btn-primary"
              style={{
                padding: '10px 22px',
                fontSize: '0.9rem',
                opacity: isSimulating ? 0.7 : 1,
              }}
            >
              {isSimulating ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  <span>Simulating Traffic Flow...</span>
                </>
              ) : (
                <>
                  <Play size={16} fill="#05070c" />
                  <span>Execute Packet Simulation</span>
                </>
              )}
            </button>
          </div>

          {/* Visual Topology Node Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '16px',
              marginBottom: '36px',
            }}
          >
            {topologyNodes.map((node) => {
              const isIncluded = currentScenario.activeNodes.includes(node.id);
              const NodeIcon = node.icon;
              return (
                <div
                  key={node.id}
                  style={{
                    background: isIncluded ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.01)',
                    border: isIncluded ? '1px solid rgba(0, 240, 255, 0.35)' : '1px solid rgba(255, 255, 255, 0.04)',
                    borderRadius: '14px',
                    padding: '18px 14px',
                    textAlign: 'center',
                    opacity: isIncluded ? 1 : 0.35,
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    boxShadow: isIncluded ? '0 4px 20px rgba(0, 0, 0, 0.4)' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: isIncluded ? 'rgba(0, 240, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 10px',
                      color: isIncluded ? '#00f0ff' : '#64748b',
                    }}
                  >
                    <NodeIcon size={20} />
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.82rem', color: '#f8fafc', marginBottom: '2px' }}>
                    {node.label}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>
                    {node.subtext}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step-by-Step Packet Trace & Latency Breakdown */}
          <div className="bento-grid">
            <div className="col-8">
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#38bdf8', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Real-Time Execution Trace</span>
                <span className="badge badge-emerald" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
                  ACTIVE PIPELINE
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentScenario.steps.map((step, idx) => {
                  const isCurrent = isSimulating && activeStepIndex === idx;
                  const isPassed = isSimulating ? activeStepIndex >= idx : true;

                  return (
                    <div
                      key={step.action}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: isCurrent
                          ? 'rgba(0, 240, 255, 0.12)'
                          : isPassed
                          ? 'rgba(255, 255, 255, 0.02)'
                          : 'rgba(255, 255, 255, 0.01)',
                        border: isCurrent
                          ? '1px solid #00f0ff'
                          : '1px solid rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: isCurrent ? '#00f0ff' : isPassed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                            color: isCurrent ? '#05070c' : isPassed ? '#10b981' : '#64748b',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                          }}
                        >
                          {idx + 1}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>
                            {step.node}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                            {step.action}
                          </div>
                        </div>
                      </div>

                      <div
                        className="mono-font"
                        style={{
                          fontSize: '0.78rem',
                          color: '#10b981',
                          background: 'rgba(16, 185, 129, 0.08)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          border: '1px solid rgba(16, 185, 129, 0.2)',
                        }}
                      >
                        +{step.latency}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Performance Benchmark Metrics Card */}
            <div className="col-4">
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#38bdf8', marginBottom: '14px' }}>
                Quantitative Benchmarks
              </div>

              <div
                style={{
                  background: 'rgba(6, 10, 18, 0.8)',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>p50 LATENCY</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00f0ff' }} className="mono-font">
                    {currentScenario.metrics.p50}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>p99 LATENCY (PEAK LOAD)</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981' }} className="mono-font">
                    {currentScenario.metrics.p99}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>MAX CONCURRENCY / RPS</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#a78bfa' }} className="mono-font">
                    {currentScenario.metrics.throughput}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>NODE.js HEAP RAM FOOTPRINT</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fbbf24' }} className="mono-font">
                    {currentScenario.metrics.memory}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
