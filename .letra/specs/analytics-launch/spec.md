# Spec: analytics-launch

> Updated: 2026-07-03

## Outcome

O time consegue:
1. Acompanhar tráfego e engajamento do site em tempo real
2. Medir conversão da waitlist (visitantes → signups)
3. Analisar comportamento dos usuários no site
4. Gerar relatórios de performance do lançamento
5. Tomar decisões baseadas em dados

## Constraints

- Usar PostHog (decidido)
- Privacy-friendly (sem cookies desnecessários)
- Dashboard acessível via browser
- Dados retidos por 12 meses
- Budget: gratuito para < 1M events/mês

## Exclusions

- **NÃO** inclui analytics de produto (só site/marketing)
- **NÃO** inclui A/B testing (v1 é medir, não otimizar)
- **NÃO** inclui heatmaps ou session replay
- **NÃO** inclui analytics de email (usar analytics do Resend)

## Acceptance Criteria

- [x] **AC-1**: PostHog configurado com tracking de page views automáticos
- [x] **AC-2**: Eventos customizados: waitlist_signup, doc_view, demo_click, github_click
- [x] **AC-3**: Dashboard principal com: visitantes únicos, pageviews, bounce rate, tempo médio
- [x] **AC-4**: Dashboard de conversão com: waitlist signups, taxa de conversão, fonte de tráfego
- [x] **AC-5**: Funil de conversão: landing page → waitlist form → signup confirmado
- [x] **AC-6**: UTM tracking para campanhas de lançamento
- [x] **AC-7**: Goals configurados: 500 signups (30 dias), 5000 visitantes (30 dias)
- [x] **AC-8**: Alertas automáticos quando métricas ficam abaixo do esperado
- [x] **AC-9**: Relatório semanal automático via email
- [x] **AC-10**: Dashboard compartilhável com link público (para investidores/advisors)

## Context

Analytics é essencial para:
- Medir sucesso do lançamento
- Identificar gargalos de conversão
- Justificar investimentos futuros
- Aprender com o comportamento dos usuários

**Trade-offs considerados:**
- PostHog self-hosted vs. cloud → cloud para simplicidade (gratuito para < 1M events)
- Muitos eventos vs. poucos → focar nos 4 eventos essenciais
- Dashboard复杂 vs. simples → simples primeiro, complicamos depois
- Real-time vs. batch → real-time para launch day
