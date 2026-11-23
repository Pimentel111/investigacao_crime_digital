export const perguntas = [
  {
    caminho: "inicio",
    enunciado:
      "A equipe de uma pequena empresa percebeu acessos incomuns a uma conta e suspeita que alguns arquivos foram expostos. Você foi chamado para ajudar a investigar. Qual é sua primeira atitude?",
    alternativas: [
      {
        texto: "Registrar o alerta e iniciar uma apuração cuidadosa, preservando as evidências.",
        afirmacao: ["Registrou o alerta e iniciou a investigação preservando as evidências."],
        tipo: "entrada",
        proxima: 1,
      },
      {
        texto: "Começar pela mensagem suspeita, preservando-a sem abrir links ou anexos.",
        afirmacao: ["Começou pela mensagem suspeita e a preservou sem interagir com ela."],
        tipo: "entrada",
        proxima: 2,
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "Você começa pelo alerta de acesso. Como verificar se ele representa uma atividade realmente suspeita?",
    alternativas: [
      {
        texto: "Comparar horário, dispositivo e local com os registros conhecidos da conta.",
        afirmacao: ["Comparou os dados do acesso com o histórico conhecido da conta."],
        tipo: "avancar",
        proxima: 3,
      },
      {
        texto: "Conversar com a pessoa responsável pela conta e confirmar se reconhece a atividade.",
        afirmacao: ["Confirmou com a pessoa responsável se ela reconhecia o acesso."],
        tipo: "salto",
        proxima: 4,
      },
      {
        texto: "Concluir que houve crime apenas pelo alerta automático.",
        afirmacao: ["Tirou uma conclusão antes de confirmar os fatos."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Um alerta é um indício, não uma conclusão. Sem checar os fatos, a equipe pode acusar alguém injustamente e comprometer a investigação.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "O alerta também menciona uma mensagem suspeita recebida por uma funcionária. Como avançar sem expor ninguém?",
    alternativas: [
      {
        texto: "Pedir que ela encaminhe a mensagem à equipe responsável, sem clicar nos links.",
        afirmacao: ["Recolheu a mensagem suspeita sem abrir links ou anexos."],
        tipo: "avancar",
        proxima: 7,
      },
      {
        texto: "Orientar a equipe a reportar mensagens parecidas e guardar os originais.",
        afirmacao: ["Orientou a equipe a reportar mensagens suspeitas e preservar os originais."],
        tipo: "salto",
        proxima: 8,
      },
      {
        texto: "Publicar a mensagem e os dados da funcionária em um grupo aberto.",
        afirmacao: ["Expôs dados pessoais durante a apuração."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A exposição de dados pessoais prejudicou a privacidade da funcionária. Evidências devem ser compartilhadas apenas com pessoas autorizadas.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "Os horários do alerta coincidem com uma tentativa de login que a pessoa não reconhece. O que fazer agora?",
    alternativas: [
      {
        texto: "Anotar os horários e solicitar à equipe técnica os registros pertinentes.",
        afirmacao: ["Documentou os horários e solicitou os registros necessários à equipe técnica."],
        tipo: "avancar",
        proxima: 4,
      },
      {
        texto: "Revisar a linha do tempo para conferir se os eventos estão relacionados.",
        afirmacao: ["Revisou a linha do tempo para conferir a relação entre os eventos."],
        tipo: "salto",
        proxima: 1,
      },
      {
        texto: "Tentar acessar a conta da pessoa para descobrir a senha usada.",
        afirmacao: ["Tentou acessar uma conta sem autorização."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Acessar contas sem autorização não é uma prática aceitável de investigação. A apuração deve usar procedimentos aprovados e equipes autorizadas.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "A pessoa confirma que não reconhece o acesso. Como registrar o que já foi apurado?",
    alternativas: [
      {
        texto: "Montar uma linha do tempo com fontes, horários e fatos ainda não confirmados.",
        afirmacao: ["Organizou uma linha do tempo e separou fatos confirmados de hipóteses."],
        tipo: "avancar",
        proxima: 5,
      },
      {
        texto: "Pedir uma segunda revisão dos registros antes de fechar a análise.",
        afirmacao: ["Solicitou uma segunda revisão dos registros da investigação."],
        tipo: "salto",
        proxima: 6,
      },
      {
        texto: "Alterar os registros para que pareçam confirmar sua hipótese.",
        afirmacao: ["Manipulou evidências para sustentar uma hipótese."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Alterar evidências destrói a confiança na apuração e impede conclusões confiáveis. Os registros devem ser mantidos íntegros.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "A linha do tempo mostra acessos próximos à abertura de um anexo inesperado. Qual é o próximo passo seguro?",
    alternativas: [
      {
        texto: "Acionar a equipe de segurança para avaliar o dispositivo e conter riscos.",
        afirmacao: ["Acionou a equipe de segurança para avaliar o dispositivo e conter riscos."],
        tipo: "avancar",
        proxima: 6,
      },
      {
        texto: "Validar a sequência dos eventos com os registros disponíveis.",
        afirmacao: ["Validou a sequência dos eventos antes de avançar."],
        tipo: "salto",
        proxima: 3,
      },
      {
        texto: "Abrir o anexo em um computador pessoal para ver o que ele faz.",
        afirmacao: ["Abriu um anexo suspeito fora de um ambiente autorizado."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Abrir um anexo suspeito pode ampliar o incidente e colocar outros dados em risco. A análise deve ser feita por profissionais em ambiente apropriado.",
      },
    ],
  },
  {
    caminho: "A",
    enunciado:
      "A equipe técnica isolou o dispositivo para análise e identificou que uma conta pode ter sido comprometida. Como proteger o ambiente?",
    alternativas: [
      {
        texto: "Seguir o plano de resposta: proteger a conta e revisar acessos relacionados.",
        afirmacao: ["Seguiu o plano de resposta para proteger a conta e revisar acessos."],
        tipo: "avancar",
        proxima: 11,
      },
      {
        texto: "Reunir os registros restantes antes de concluir o relatório.",
        afirmacao: ["Reuniu os registros restantes para concluir a análise com cuidado."],
        tipo: "salto",
        proxima: 5,
      },
      {
        texto: "Compartilhar os arquivos possivelmente afetados com toda a empresa.",
        afirmacao: ["Compartilhou arquivos potencialmente afetados sem controle de acesso."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Distribuir arquivos potencialmente comprometidos pode aumentar o impacto. A contenção deve ser coordenada e limitada às equipes autorizadas.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "Você recebeu a mensagem suspeita preservada. Como documentá-la para a equipe analisar?",
    alternativas: [
      {
        texto: "Registrar remetente e horário e encaminhar o original pelo canal oficial.",
        afirmacao: ["Documentou a mensagem e encaminhou o original pelo canal oficial."],
        tipo: "avancar",
        proxima: 8,
      },
      {
        texto: "Conferir se outras pessoas receberam mensagens semelhantes.",
        afirmacao: ["Verificou se outras pessoas receberam mensagens parecidas."],
        tipo: "salto",
        proxima: 2,
      },
      {
        texto: "Responder ao remetente fingindo ser outra pessoa.",
        afirmacao: ["Interagiu com o remetente sem autorização ou orientação da equipe."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Responder por conta própria pode aumentar o risco e atrapalhar a coleta de evidências. Siga os procedimentos da equipe responsável.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "A análise inicial indica que outras pessoas receberam mensagens semelhantes. O que você recomenda?",
    alternativas: [
      {
        texto: "Avisar a equipe de segurança e orientar as pessoas a não interagir com a mensagem.",
        afirmacao: ["Avisou a equipe de segurança e orientou as pessoas a não interagir com a mensagem."],
        tipo: "avancar",
        proxima: 9,
      },
      {
        texto: "Revisar os relatos para separar coincidências de informações verificadas.",
        afirmacao: ["Revisou os relatos com atenção para separar fatos de suposições."],
        tipo: "salto",
        proxima: 10,
      },
      {
        texto: "Acusar publicamente uma pessoa sem evidências confirmadas.",
        afirmacao: ["Acusou alguém sem evidências confirmadas."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Uma suspeita não comprova autoria. Acusações públicas sem evidências podem causar danos e comprometer a apuração.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "A equipe está verificando o alcance das mensagens. Como manter a comunicação responsável?",
    alternativas: [
      {
        texto: "Compartilhar orientações práticas, sem divulgar nomes ou detalhes da apuração.",
        afirmacao: ["Compartilhou orientações úteis sem expor pessoas ou detalhes da apuração."],
        tipo: "avancar",
        proxima: 10,
      },
      {
        texto: "Esperar a equipe validar os fatos antes de enviar um aviso mais amplo.",
        afirmacao: ["Aguardou a validação da equipe antes de ampliar o aviso."],
        tipo: "salto",
        proxima: 7,
      },
      {
        texto: "Enviar capturas com dados pessoais para todos os contatos.",
        afirmacao: ["Divulgou dados pessoais além do necessário."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "A divulgação indiscriminada de capturas pode expor dados privados. Use apenas os canais oficiais e compartilhe o mínimo necessário.",
      },
    ],
  },
  {
    caminho: "B",
    enunciado:
      "A equipe concluiu a triagem e está preparando a resposta. O que deve constar no registro do incidente?",
    alternativas: [
      {
        texto: "Fatos confirmados, medidas tomadas, responsáveis e próximos passos.",
        afirmacao: ["Registrou fatos, medidas tomadas, responsáveis e próximos passos."],
        tipo: "avancar",
        proxima: 12,
      },
      {
        texto: "Revisar a comunicação e os relatos para evitar informações imprecisas.",
        afirmacao: ["Revisou os relatos e a comunicação antes de concluir o registro."],
        tipo: "salto",
        proxima: 9,
      },
      {
        texto: "Excluir as mensagens e encerrar o caso sem documentar as decisões.",
        afirmacao: ["Encerrou o caso sem preservar as evidências nem registrar as decisões."],
        tipo: "gameover",
        disponivel: true,
        mensagem:
          "Sem documentação, não é possível acompanhar as decisões nem aprender com o incidente. Mantenha registros íntegros conforme as regras da organização.",
      },
    ],
  },
  {
    caminho: "A",
    final: "vitoria",
    enunciado:
      "A conta foi protegida, os registros relevantes foram preservados e a equipe autorizada recebeu uma linha do tempo clara. A investigação foi conduzida com cuidado, respeito à privacidade e sem conclusões precipitadas. Caso encaminhado com sucesso!",
    alternativas: [],
  },
  {
    caminho: "B",
    final: "vitoria",
    enunciado:
      "A mensagem foi analisada pela equipe responsável, as pessoas receberam orientações seguras e o incidente foi documentado sem expor dados pessoais. Sua colaboração ajudou a investigação a avançar de forma responsável. Caso encaminhado com sucesso!",
    alternativas: [],
  },
];