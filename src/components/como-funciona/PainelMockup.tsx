"use client";

import { useState } from "react";
import {
  TriangleAlert,
  Search,
  Bell,
  ChevronDown,
  FileText,
  Filter,
  Activity,
  FilePlus,
  Clock,
  Scale,
  Plus,
  Check
} from "lucide-react";

type Status = "ok" | "warn" | "crit";
type TabId =
  | "Portfólio"
  | "Contratos"
  | "Obrigações"
  | "Aditivos"
  | "Histórico"
  | "Resolução SOMA";

const SIDEBAR: { label: TabId; icon: typeof Activity; soma?: boolean }[] = [
  { label: "Portfólio", icon: Activity },
  { label: "Contratos", icon: FileText },
  { label: "Obrigações", icon: Bell },
  { label: "Aditivos", icon: FilePlus },
  { label: "Histórico", icon: Clock },
  { label: "Resolução SOMA", icon: Scale, soma: true }
];

const STATS = [
  { label: "Vencem em 30d", val: "8", trend: "+2" },
  { label: "Aguardam aprovação", val: "3", trend: "−1" },
  { label: "Em renegociação", val: "2", trend: "0" }
];

const CONTRATOS: { bar: Status; name: string; meta: string; valor: string }[] = [
  { bar: "warn", name: "Contrato de Outsourcing · Beta Serviços", meta: "Vence 12 jun · obrigação pendente", valor: "R$ 24.000/mês" },
  { bar: "ok", name: "Acordo Master · Gama Indústria", meta: "Em dia · 2 aditivos", valor: "R$ 56.000/mês" },
  { bar: "crit", name: "Contrato de Manutenção · Delta Tech", meta: "SLA descumprido · multa não cobrada", valor: "R$ 4.200" },
  { bar: "ok", name: "NDA · Epsilon Solutions", meta: "Ativo · 18 meses restantes", valor: "—" },
  { bar: "ok", name: "Acordo de Fornecimento · Zeta Logística", meta: "Em dia · próxima entrega 28 mai", valor: "R$ 18.500/mês" }
];

const TODOS_CONTRATOS: { bar: Status; name: string; meta: string; valor: string }[] = [
  ...CONTRATOS,
  { bar: "ok", name: "Prestação de Serviços · Sigma Marketing", meta: "Em dia · renovação automática", valor: "R$ 32.000/mês" },
  { bar: "warn", name: "Locação Comercial · Theta Imóveis", meta: "Reajuste IGPM em 22 jun", valor: "R$ 12.800/mês" },
  { bar: "ok", name: "Acordo de Confidencialidade · Iota Tech", meta: "Ativo · validade 36 meses", valor: "—" }
];

const OBRIGACOES: { bar: Status; name: string; meta: string; valor?: string }[] = [
  { bar: "crit", name: "Pagamento da fatura · Delta Tech", meta: "Vencido há 4 dias · R$ 4.200" },
  { bar: "warn", name: "Entrega do relatório mensal · Beta Serviços", meta: "Vence em 3 dias" },
  { bar: "warn", name: "Validação SLA Q2 · Gama Indústria", meta: "Vence em 8 dias" },
  { bar: "ok", name: "Auditoria de compliance · Sigma Marketing", meta: "Próxima em 22 dias" },
  { bar: "ok", name: "Reajuste IGPM · Theta Imóveis", meta: "Próximo em 31 dias" }
];

const ADITIVOS: { bar: Status; name: string; meta: string; valor?: string }[] = [
  { bar: "ok", name: "Aditivo 03 · Ajuste de escopo · Beta Serviços", meta: "Aprovado · 12 mai" },
  { bar: "ok", name: "Aditivo 02 · Renovação · Gama Indústria", meta: "Aprovado · 08 mai" },
  { bar: "warn", name: "Aditivo 01 · Mudança de signatário · Sigma Marketing", meta: "Aguarda aprovação · enviado 15 mai" },
  { bar: "ok", name: "Aditivo 04 · Extensão de prazo · Epsilon Solutions", meta: "Aprovado · 02 mai" }
];

const HISTORICO = [
  { when: "Hoje", text: "Versão 7 publicada · Acordo Master Gama Indústria", actor: "Camila O." },
  { when: "Ontem", text: "Camila O. assinou Aditivo 03 · Beta Serviços", actor: "Camila O." },
  { when: "Há 3 dias", text: "Renovação automática evitada · Fornecedor X", actor: "Sistema" },
  { when: "Há 5 dias", text: "Comentário em cláusula 8.2 · Delta Tech", actor: "Rafael M." },
  { when: "Há 1 semana", text: "Cláusula NDA revisada · Epsilon Solutions", actor: "Paula A." }
];

const FILTERS: { label: string; check: (s: Status) => boolean }[] = [
  { label: "Todos", check: () => true },
  { label: "Em dia", check: (s) => s === "ok" },
  { label: "Em risco", check: (s) => s !== "ok" }
];

export function PainelMockup() {
  const [tab, setTab] = useState<TabId>("Portfólio");
  const [filterIdx, setFilterIdx] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);

  const currentFilter = FILTERS[filterIdx];
  const filteredContratos = CONTRATOS.filter((c) => currentFilter.check(c.bar));

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl bg-peach-bg" />

      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl">
        {/* Toolbar */}
        <div className="flex items-center gap-3 bg-brand px-5 py-3">
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="ml-2 font-mono text-[11px] text-white/85">
            +legal_ · Workspace · Acme Consultoria
          </span>
          <div className="ml-auto flex items-center gap-3">
            <Bell className="size-3.5 text-white/70" strokeWidth={1.6} />
            <span className="flex size-6 items-center justify-center rounded-full bg-peach-dark text-[10px] font-bold text-white">
              CO
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="border-b border-stone-200 p-4 md:w-[210px] md:border-b-0 md:border-r">
            <p className="mb-3 px-3 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-400">
              Workspace
            </p>
            {SIDEBAR.map((item) => {
              const Icon = item.icon;
              const active = tab === item.label;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setTab(item.label)}
                  className={`mb-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-medium transition-colors ${
                    active
                      ? "bg-brand-tint font-semibold text-brand"
                      : item.soma
                        ? "text-soma hover:bg-stone-50"
                        : "text-gray-500 hover:bg-stone-50 hover:text-gray-700"
                  }`}
                >
                  <Icon className="size-3.5" strokeWidth={active ? 2 : 1.6} />
                  {item.label}
                </button>
              );
            })}
            <div className="mt-4 border-t border-stone-200 pt-4">
              <p className="px-3 font-mono text-[10px] uppercase tracking-widest text-stone-400">
                Visitantes ativos
              </p>
              <div className="mt-2 flex items-center gap-2 px-3">
                <span className="flex size-7 items-center justify-center rounded-full bg-stone-100 text-[10px] font-bold text-gray-600">
                  RC
                </span>
                <span className="flex size-7 items-center justify-center rounded-full bg-stone-100 text-[10px] font-bold text-gray-600">
                  MA
                </span>
                <span className="flex size-7 items-center justify-center rounded-full bg-stone-100 text-[10px] font-bold text-gray-600">
                  +3
                </span>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 p-6 md:p-7">
            {tab === "Portfólio" && (
              <PortfolioView
                filterLabel={currentFilter.label}
                filterOpen={filterOpen}
                onFilterToggle={() => setFilterOpen(!filterOpen)}
                onFilterPick={(i) => {
                  setFilterIdx(i);
                  setFilterOpen(false);
                }}
                contratos={filteredContratos}
              />
            )}
            {tab === "Contratos" && <ContratosView />}
            {tab === "Obrigações" && <ObrigacoesView />}
            {tab === "Aditivos" && <AditivosView />}
            {tab === "Histórico" && <HistoricoView />}
            {tab === "Resolução SOMA" && <SomaView />}
          </div>
        </div>
      </div>

      <p className="mt-5 text-center font-mono text-[11px] italic text-stone-500">
        Visualização conceitual da plataforma. Não é a interface final do produto.
      </p>
    </div>
  );
}

function MainHeader({ eyebrow, title, count }: { eyebrow: string; title: string; count?: string }) {
  return (
    <div className="mb-5">
      <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
        {eyebrow}
      </p>
      <h4 className="font-title text-xl font-bold text-gray-900">
        {title} {count && <span className="text-stone-400">· {count}</span>}
      </h4>
    </div>
  );
}

function PortfolioView({
  filterLabel,
  filterOpen,
  onFilterToggle,
  onFilterPick,
  contratos
}: {
  filterLabel: string;
  filterOpen: boolean;
  onFilterToggle: () => void;
  onFilterPick: (i: number) => void;
  contratos: typeof CONTRATOS;
}) {
  return (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
            Visão geral
          </p>
          <h4 className="font-title text-xl font-bold text-gray-900">
            47 contratos ativos
          </h4>
        </div>
        <div className="relative flex items-center gap-2">
          <button
            type="button"
            onClick={onFilterToggle}
            className="flex items-center gap-1.5 rounded-lg border border-stone-200 px-3 py-1.5 hover:bg-stone-50"
          >
            <Filter className="size-3.5 text-stone-500" strokeWidth={1.6} />
            <span className="font-mono text-[11px] text-stone-700">{filterLabel}</span>
            <ChevronDown className={`size-3 text-stone-500 transition-transform ${filterOpen ? "rotate-180" : ""}`} strokeWidth={2} />
          </button>
          {filterOpen && (
            <div className="absolute right-0 top-full z-10 mt-1 w-44 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-lg">
              {FILTERS.map((f, i) => (
                <button
                  key={f.label}
                  type="button"
                  onClick={() => onFilterPick(i)}
                  className={`flex w-full items-center justify-between px-3 py-2 text-left font-mono text-[11px] hover:bg-stone-50 ${
                    f.label === filterLabel ? "bg-brand-tint text-brand" : "text-stone-700"
                  }`}
                >
                  {f.label}
                  {f.label === filterLabel && <Check className="size-3" strokeWidth={2.5} />}
                </button>
              ))}
            </div>
          )}
          <div className="hidden items-center gap-2 rounded-lg border border-stone-200 px-3 py-1.5 md:flex">
            <Search className="size-3.5 text-stone-400" strokeWidth={1.6} />
            <span className="font-mono text-[11px] text-stone-400">Buscar</span>
          </div>
        </div>
      </div>

      <div className="mb-5 grid grid-cols-3 gap-3">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-lg border border-stone-100 bg-stone-50 p-4">
            <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-wide text-stone-500">
              {s.label}
            </p>
            <div className="flex items-baseline gap-2">
              <p className="font-title text-2xl font-extrabold text-brand">{s.val}</p>
              <span
                className={`font-mono text-[10px] font-bold ${
                  s.trend.startsWith("+")
                    ? "text-peach-dark"
                    : s.trend.startsWith("−")
                      ? "text-emerald-600"
                      : "text-stone-400"
                }`}
              >
                {s.trend} vs. mês passado
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 flex items-start gap-3 rounded-r-lg border-l-4 border-red-600 bg-rose-50 px-4 py-3">
        <TriangleAlert className="size-5 flex-shrink-0 text-red-600" strokeWidth={1.8} />
        <div className="flex-1">
          <p className="text-[13px] leading-snug text-gray-900">
            <strong>Renovação automática em 12 dias</strong> · Contrato Fornecedor X · R$ 8.500/mês
          </p>
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-red-700">
            Cancelamento até 18 mai
          </p>
        </div>
        <button className="self-center rounded-md border border-red-300 bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-red-700 hover:bg-red-50">
          Revisar
        </button>
      </div>

      <ContratoList items={contratos} showValor />
      {contratos.length === 0 && (
        <p className="rounded-lg border border-dashed border-stone-200 px-4 py-6 text-center font-mono text-[11px] text-stone-500">
          Nenhum contrato corresponde ao filtro
        </p>
      )}
    </>
  );
}

function ContratosView() {
  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <MainHeader eyebrow="Todos" title="Contratos" count="8 ativos" />
        <button className="flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-white hover:bg-brand-mid">
          <Plus className="size-3.5" strokeWidth={2.5} /> Novo
        </button>
      </div>
      <ContratoList items={TODOS_CONTRATOS} showValor />
    </>
  );
}

function ObrigacoesView() {
  return (
    <>
      <MainHeader eyebrow="Pendentes" title="Obrigações" count="5 abertas" />
      <div className="mb-5 grid grid-cols-3 gap-3">
        <div className="rounded-lg border border-stone-100 bg-stone-50 p-4">
          <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-wide text-stone-500">Em atraso</p>
          <p className="font-title text-2xl font-extrabold text-red-600">1</p>
        </div>
        <div className="rounded-lg border border-stone-100 bg-stone-50 p-4">
          <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-wide text-stone-500">Próximas 7 dias</p>
          <p className="font-title text-2xl font-extrabold text-peach-dark">2</p>
        </div>
        <div className="rounded-lg border border-stone-100 bg-stone-50 p-4">
          <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-wide text-stone-500">Em dia</p>
          <p className="font-title text-2xl font-extrabold text-brand">2</p>
        </div>
      </div>
      <ContratoList items={OBRIGACOES} />
    </>
  );
}

function AditivosView() {
  return (
    <>
      <MainHeader eyebrow="Recentes" title="Aditivos" count="4 este mês" />
      <ContratoList items={ADITIVOS} />
    </>
  );
}

function HistoricoView() {
  return (
    <>
      <MainHeader eyebrow="Eventos recentes" title="Histórico" count="últimos 7 dias" />
      <div className="space-y-3">
        {HISTORICO.map((h) => (
          <div key={h.text} className="flex gap-3 border-l-2 border-stone-200 px-4 py-2">
            <span className="flex-shrink-0 font-mono text-[10px] font-bold uppercase tracking-wide text-stone-500">
              {h.when}
            </span>
            <div className="flex-1">
              <p className="text-[13px] text-gray-900">{h.text}</p>
              <p className="mt-0.5 font-mono text-[10px] tracking-wide text-stone-500">
                por {h.actor}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function SomaView() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-200 bg-stone-50 px-6 py-12 text-center">
      <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-soma/10">
        <Scale className="size-6 text-soma" strokeWidth={1.6} />
      </div>
      <h4 className="mb-2 font-title text-lg font-bold text-gray-900">
        Nenhum procedimento em andamento.
      </h4>
      <p className="mb-5 max-w-[400px] text-[13px] leading-relaxed text-stone-600">
        Quando uma divergência precisa virar disputa formal, a câmara SOMA está acoplada com mediação primeiro e arbitragem se necessário.
      </p>
      <button className="rounded-lg bg-soma px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-white hover:bg-soma/90">
        Abrir procedimento
      </button>
    </div>
  );
}

function ContratoList({
  items,
  showValor = false
}: {
  items: { bar: Status; name: string; meta: string; valor?: string }[];
  showValor?: boolean;
}) {
  return (
    <div className="space-y-2">
      {items.map((c) => (
        <div
          key={c.name}
          className="flex items-center gap-3 rounded-lg border border-stone-100 bg-white px-4 py-3 transition-colors hover:bg-stone-50"
        >
          <span
            className={`w-1 self-stretch rounded ${
              c.bar === "ok"
                ? "bg-brand"
                : c.bar === "warn"
                  ? "bg-peach-dark"
                  : "bg-red-600"
            }`}
            style={{ minHeight: 32 }}
          />
          <FileText className="size-4 flex-shrink-0 text-stone-400" strokeWidth={1.5} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold text-gray-900">{c.name}</p>
            <p className="mt-0.5 font-mono text-[10px] tracking-wide text-stone-500">
              {c.meta}
            </p>
          </div>
          {showValor && c.valor && (
            <p className="hidden font-mono text-[11px] text-gray-700 md:block">{c.valor}</p>
          )}
        </div>
      ))}
    </div>
  );
}
