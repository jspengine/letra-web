# Spec: waitlist-community

> Updated: 2026-07-03

## Outcome

O visitante consegue:
1. Fazer join na waitlist com apenas email
2. Receber confirmação imediata
3. Acessar a community (Discord)
4. Participar de discussões e dar feedback
5. Receber updates sobre o progresso do produto

## Constraints

- Formulário simples: apenas campo de email
- Confirmação imediata (sem review manual)
- Discord server com 5+ canais organizados
- Email de boas-vindas automatizado
- GDPR compliance (opt-in explícito)

## Exclusions

- **NÃO** inclui pagamento ou billing
- **NÃO** inclui autenticação complexa (apenas email)
- **NÃO** inclui sistema de tickets ou suporte
- **NÃO** inclui gamificação ou rewards

## Acceptance Criteria

- [x] **AC-1**: Formulário de waitlist com campo de email + botão "Join waitlist"
- [x] **AC-2**: Validação de email no client-side e server-side
- [x] **AC-3**: Mensagem de confirmação "You're on the list!" após submit
- [x] **AC-4**: Email de boas-vindas automático via Resend
- [x] **AC-5**: Discord server com 5 canais: #announcements, #general, #feedback, #support, #showcase
- [x] **AC-6**: Bot do Discord com comando `/status` para ver posição na waitlist
- [x] **AC-7**: Dashboard interno para ver métricas de waitlist (signups, taxa de conversão)
- [x] **AC-8**: Export de emails da waitlist (CSV)
- [x] **AC-9**: Mobile responsivo (testado em 375px, 768px, 1024px)
- [x] **AC-10**: Privacy policy e terms of service link no formulário

## Context

A waitlist e community são essenciais para:
- Gerar anticipation antes do lançamento
- Coletar feedback de early adopters
- Construir uma base de usuários engajados
- Validar interesse no produto antes de investir em marketing

**Trade-offs considerados:**
- Formulário simples vs. enriquecido → simples primeiro (só email), enriquecemos depois
- Discord vs. Slack → Discord é mais popular para developer communities
- Bot customizado vs. bot pronto → bot pronto primeiro, customizamos depois
- Email manual vs. automatizado → automatizado desde o início
