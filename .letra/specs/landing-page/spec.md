# Spec: landing-page

> Updated: 2026-07-03

## Outcome

O visitante consegue:
1. Entender o que é o Letra em 5 segundos
2. Ver uma demo/preview do produto
3. Entender por que precisa do Letra (problema → solução)
4. Fazer join na waitlist
5. Acessar documentação e recursos

## Constraints

- Seguir brand-book.md rigorosamente (cores, tipografia, voz)
- Dark UI como base (#0F1115), Amber como acento (#FFB800)
- Fontes: Sora (headlines), Inter (body)
- Performance: LCP < 2.5s, CLS < 0.1
- Mobile-first, responsivo
- Acessível (WCAG 2.1 AA)

## Exclusions

- **NÃO** é um dashboard de produto (isso é outro spec)
- **NÃO** é um blog (isso é outro spec)
- **NÃO** é uma doc site (isso é outro spec)
- **NÃO** inclui backend de waitlist (apenas UI do formulário)
- **NÃO** inclui autenticação ou área de login

## Acceptance Criteria

- [x] **AC-1**: Hero section com headline "Da intenção à entrega" e subheadline que explica o produto em 1 frase
- [x] **AC-2**: Seção "O problema" com 3 pontos de dor do público-alvo
- [x] **AC-3**: Seção "A solução" com 3 features principais do Letra
- [x] **AC-4**: Visual do fluxo modular `●──●──●──◆` como elemento central
- [x] **AC-5**: Demo/preview interativo ou vídeo curto (< 60s)
- [x] **AC-6**: Waitlist form com campo de email + CTA "Join waitlist"
- [x] **AC-7**: Footer com links: GitHub, Docs, Community, Contact
- [x] **AC-8**: Mobile responsivo (testado em 375px, 768px, 1024px)
- [x] **AC-9**: Performance: Lighthouse score > 90 em todas as categorias
- [x] **AC-10**: Acessibilidade: contraste AA, alt texts, keyboard navigation

## Context

A landing page é o primeiro ponto de contato do público com o Letra. Ela deve:
- Comunicar o valor em segundos (visitantes decidem em 5s se ficam ou saem)
- Gerar confiança (design premium, conteúdo técnico preciso)
- Converter em waitlist signups (o objetivo principal)

**Trade-offs considerados:**
- Video demo vs. interactive demo → interactive demo é mais engajante mas mais caro; começaremos com vídeo e migramos para interactive depois
- Single page vs. multi-page → single page para launch, multi-page depois quando tivermos mais conteúdo
- Formulário simples vs. enriquecido → simples primeiro (só email), enriquecemos depois com dados de segmentação

## Prioridade

**P0** — Essencial para o launch. Sem isso, não há launch.
