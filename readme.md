# Elena Moura Fotografia

## Integrantes da dupla
- Luisa Castro Fagundes Frota

## Descrição do caso escolhido
O projeto consiste no desenvolvimento de uma página institucional estática para Elena Moura, profissional autônoma que atua no ramo de fotografia comercial, com foco estrito em retratos corporativos para posicionamento digital de lideranças e cobertura de eventos empresariais e tecnológicos.

## Necessidade identificada
A profissional operava a captação de clientes exclusivamente através de plataformas informais de redes sociais, o que gerava limitações de penetração de mercado perante o público corporativo B2B (empresas e executivos). Constatou-se a ausência de um canal oficial consolidado que pudesse transmitir elegância, sobriedade e exibir seu portfólio de maneira organizada, hierárquica e acessível.

## Público-alvo
O público-alvo é composto por executivos, diretores institucionais, profissionais liberais (advogados, médicos, consultores) e organizadores de conferências de médio e grande porte que demandam imagens de alta qualidade estética, sutil e profissional.

## Objetivo do site
O objetivo principal é a captação de leads qualificados. A página foi estrategicamente estruturada para conduzir de forma orgânica o visitante até a Call to Action (CTA) principal: preencher o formulário de contato para solicitação de orçamentos personalizados.

## Processo de desenvolvimento
O desenvolvimento seguiu ritos incrementais estruturados em quatro etapas principais:
1. **Diagnóstico e Briefing:** Definição do problema real da profissional autônoma e mapeamento das dores do público-alvo.
2. **Arquitetura de Informação:** Definição da árvore de conteúdo utilizando HTML5 estrutural e semântico de acordo com as especificações exigidas.
3. **Estilização e Frameworks:** Implementação de layout fluido por meio de CSS customizado acoplado de forma leve com utilitários responsivos do Bootstrap 5.
4. **Interatividade e Testes:** Inclusão de recursos lógicos via JavaScript vanilla para manipulação do DOM e testes integrados de acessibilidade.

## Principais decisões do projeto
- **Estrutura HTML:** Utilização estrita de tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) para garantir semântica adequada e leitura limpa por leitores de tela.
- **Organização Visual:** Paleta minimalista e elegante focada em tons sóbrios, garantindo que o design abstrato simule a seriedade do mercado corporativo.
- **Responsividade:** Uso do ecossistema de grid dinâmico combinando classes nativas do Bootstrap que quebram o layout de 3 colunas em telas grandes para 1 coluna vertical legível em dispositivos móveis automaticamente.
- **Acessibilidade:** Link oculto para navegação rápida (`.visually-hidden-focusable`), indicação visual nítida de foco ativo via teclado (`:focus-visible`), e manutenção rigorosa de contraste texto-fundo.

## Funcionalidade em JavaScript
Foram implementados dois escopos funcionais leves:
1. **Filtro de Categoria Dinâmico:** Manipulação de propriedades de exibição (`style.display`) ativadas por eventos de clique nos botões do Portfólio, permitindo segregar os trabalhos em "Corporativo" e "Eventos" instantaneamente sem recarregar a página.
2. **Validação Client-Side de Formulário:** Tratamento do evento `submit` com higienização de strings (`.trim()`) para impedir submissões vazias e retorno de feedback visual via alertas de status integrados.

## Uso de Bootstrap
O framework Bootstrap 5 foi integrado via CDN de forma introdutória e estratégica, utilizando componentes específicos:
- `Navbar` expansiva e colapsável automaticamente para interfaces mobile.
- `Grid System` (`container`, `row`, `col-*`) para sustentação estrutural responsiva.
- Classes utilitárias de espaçamento (`py-*`, `mb-*`, `g-*`) e componentes de cartão (`card`).

## Testes realizados
- **Responsividade:** Verificação minuciosa em ambiente de desenvolvimento via Device Mode simulando resoluções de smartphones, tablets e desktops (Prevenindo rolagem horizontal).
- **Acessibilidade:** Navegação cega executada integralmente via teclado (tecla `Tab` e `Enter`) validando a ordem lógica e foco visível de todos os elementos interativos.
- **Lógica JavaScript:** Validação de tentativas de envios nulos do formulário e checagem de isolamento dos blocos do portfólio sob os filtros de cliques.

## Links
- Link do repositório: https://github.com/luisacastro/trabalho-frontend-elena-moura
- Link do site publicado: https://luisacastro.github.io/trabalho-frontend-elena-moura/

## Contribuição dos integrantes
- **Luisa Castro Fagundes Frota:** Responsável integral pelo diagnóstico inicial da necessidade, arquitetura semântica do documento HTML5, lógica de filtros e validação em JavaScript, além da configuração de estilo CSS e testes de responsividade e acessibilidade por teclado.
