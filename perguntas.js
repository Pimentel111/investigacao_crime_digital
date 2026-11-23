export const perguntas = [
  {
    id: 1,
    titulo: "Alerta de invasão",
    enunciado: "Uma conta apresenta acessos incomuns.",
    alternativas: [
      {
        texto: "Conferir os dispositivos autorizados.",
        proxima: 3,
      },
      {
        texto: "Ignorar o alerta temporariamente.",
        proxima: "fim",
        mensagem:
          "O alerta foi ignorado e a investigação foi encerrada antes que os fatos fossem verificados.",
      },
      {
        texto: "Isolar o incidente e registrar o alerta.",
        proxima: 2,
      },
    ],
  },
  {
    id: 2,
    titulo: "Preservação inicial",
    enunciado: "É necessário proteger os primeiros registros.",
    alternativas: [
      {
        texto: "Alterar os registros suspeitos.",
        proxima: "fim",
        mensagem:
          "A alteração dos registros compromete sua integridade. A investigação foi encerrada para evitar novas mudanças nas evidências.",
      },
      {
        texto: "Criar uma cópia dos logs.",
        proxima: 4,
      },
      {
        texto: "Pedir orientações à equipe responsável.",
        proxima: 3,
      },
    ],
  },
  {
    id: 3,
    titulo: "Linha do tempo",
    enunciado: "Os acessos aconteceram em horários incomuns.",
    alternativas: [
      {
        texto: "Avançar diretamente para a análise da conta.",
        proxima: 6,
      },
      {
        texto: "Comparar os eventos com o histórico da conta.",
        proxima: 4,
      },
      {
        texto: "Organizar os horários em uma linha do tempo.",
        proxima: 5,
      },
    ],
  },
  {
    id: 4,
    titulo: "Mensagem suspeita",
    enunciado: "Uma funcionária recebeu um arquivo desconhecido.",
    alternativas: [
      {
        texto: "Voltar à análise dos acessos.",
        proxima: 3,
      },
      {
        texto: "Preservar a mensagem sem abrir anexos.",
        proxima: 5,
      },
      {
        texto: "Avançar para a contenção da ameaça.",
        proxima: 7,
      },
    ],
  },
  {
    id: 5,
    titulo: "Compartilhamento",
    enunciado: "É necessário documentar a mensagem recebida.",
    alternativas: [
      {
        texto: "Avançar para verificar outros destinatários.",
        proxima: 8,
      },
      {
        texto: "Registrar remetente, horário e conteúdo.",
        proxima: 6,
      },
      {
        texto: "Voltar à linha do tempo.",
        proxima: 4,
      },
    ],
  },
  {
    id: 6,
    titulo: "Conta comprometida",
    enunciado: "Há forte indicação de acesso não autorizado.",
    alternativas: [
      {
        texto: "Voltar à mensagem suspeita.",
        proxima: 5,
      },
      {
        texto: "Avançar para isolar os dispositivos.",
        proxima: 10,
      },
      {
        texto: "Bloquear temporariamente a conta.",
        proxima: 9,
      },
    ],
  },
  {
    id: 7,
    titulo: "Dispositivo suspeito",
    enunciado: "O arquivo pode ter sido executado em um computador.",
    alternativas: [
      {
        texto: "Avançar para coleta de evidências.",
        proxima: 11,
      },
      {
        texto: "Acionar o técnico para contenção segura.",
        proxima: 10,
      },
      {
        texto: "Voltar à conta comprometida.",
        proxima: 6,
      },
    ],
  },
  {
    id: 8,
    titulo: "Propagação",
    enunciado: "Outras pessoas podem ter recebido a mesma mensagem.",
    alternativas: [
      {
        texto: "Voltar à documentação da mensagem.",
        proxima: 5,
      },
      {
        texto: "Solicitar relatos sem expor dados pessoais.",
        proxima: 11,
      },
      {
        texto: "Avançar para avisar a equipe de segurança.",
        proxima: 12,
      },
    ],
  },
  {
    id: 9,
    titulo: "Autorização",
    enunciado: "A equipe precisa confirmar a ação seguinte.",
    alternativas: [
      {
        texto: "Avançar para preservar os logs.",
        proxima: 13,
      },
      {
        texto: "Voltar à análise da conta.",
        proxima: 6,
      },
      {
        texto: "Seguir o plano de resposta da organização.",
        proxima: 12,
      },
    ],
  },
  {
    id: 10,
    titulo: "Decisão estratégica",
    enunciado:
      "Novos registros podem confirmar ou enfraquecer a suspeita.",
    alternativas: [
      {
        texto: "Seguir pela rota intermediária de proteção.",
        proxima: 11,
      },
      {
        texto: "Avançar para confirmar a origem do incidente.",
        proxima: 14,
      },
      {
        texto: "Voltar à análise do dispositivo.",
        proxima: 7,
      },
    ],
  },
  {
    id: 11,
    titulo: "Relatórios técnicos",
    enunciado: "Os técnicos encontraram artefatos relevantes.",
    alternativas: [
      {
        texto: "Voltar aos relatos das vítimas.",
        proxima: 8,
      },
      {
        texto: "Solicitar uma segunda revisão técnica.",
        proxima: 12,
      },
      {
        texto: "Avançar para catalogar as evidências.",
        proxima: 15,
      },
    ],
  },
  {
    id: 12,
    titulo: "Equipe de resposta",
    enunciado: "A contenção precisa ser comunicada.",
    alternativas: [
      {
        texto: "Voltar à confirmação da conta.",
        proxima: 9,
      },
      {
        texto: "Informar apenas os responsáveis autorizados.",
        proxima: 16,
      },
      {
        texto: "Avançar para montar a linha do tempo final.",
        proxima: 17,
      },
    ],
  },
  {
    id: 13,
    titulo: "Integridade dos logs",
    enunciado: "É necessário garantir que os registros não sejam alterados.",
    alternativas: [
      {
        texto: "Avançar para identificar os artefatos.",
        proxima: 18,
      },
      {
        texto: "Voltar à preservação dos registros.",
        proxima: 10,
      },
      {
        texto:
          "Aplicar controle de integridade e registrar a cadeia de custódia.",
        proxima: 17,
      },
    ],
  },
  {
    id: 14,
    titulo: "Origem da ameaça",
    enunciado: "O endereço usado na mensagem precisa ser investigado.",
    alternativas: [
      {
        texto: "Voltar à contenção do dispositivo.",
        proxima: 11,
      },
      {
        texto: "Avançar para comparar os artefatos.",
        proxima: 19,
      },
      {
        texto: "Consultar os registros oficiais de conexão.",
        proxima: 18,
      },
    ],
  },
  {
    id: 15,
    titulo: "Catalogação",
    enunciado: "Os arquivos coletados precisam ser classificados.",
    alternativas: [
      {
        texto: "Avançar para redigir o relatório.",
        proxima: 20,
      },
      {
        texto: "Voltar aos registros técnicos.",
        proxima: 12,
      },
      {
        texto: "Separar evidências, cópias e hipóteses.",
        proxima: 19,
      },
    ],
  },
  {
    id: 16,
    titulo: "Comunicação segura",
    enunciado: "Uma atualização precisa ser enviada à equipe.",
    alternativas: [
      {
        texto: "Voltar à equipe de resposta.",
        proxima: 13,
      },
      {
        texto: "Usar o canal oficial e omitir dados desnecessários.",
        proxima: 19,
      },
      {
        texto: "Avançar diretamente para o fechamento.",
        proxima: 20,
      },
    ],
  },
  {
    id: 17,
    titulo: "Linha do tempo final",
    enunciado: "Os fatos precisam ser organizados antes da conclusão.",
    alternativas: [
      {
        texto: "Avançar para o relatório executivo.",
        proxima: 20,
      },
      {
        texto: "Voltar à integridade dos logs.",
        proxima: 14,
      },
      {
        texto: "Confirmar horários, fontes e responsáveis.",
        proxima: 20,
      },
    ],
  },
  {
    id: 18,
    titulo: "Análise dos artefatos",
    enunciado: "Os resultados precisam ser confirmados.",
    alternativas: [
      {
        texto: "Avançar para preservar os resultados.",
        proxima: 20,
      },
      {
        texto: "Voltar à origem da ameaça.",
        proxima: 15,
      },
      {
        texto: "Cruzar os artefatos com os registros da rede.",
        proxima: 20,
      },
    ],
  },
  {
    id: 19,
    titulo: "Revisão independente",
    enunciado: "Alguém deve validar as conclusões.",
    alternativas: [
      {
        texto: "Avançar para concluir o caso.",
        proxima: 20,
      },
      {
        texto: "Voltar à catalogação das evidências.",
        proxima: 16,
      },
      {
        texto: "Solicitar revisão da equipe autorizada.",
        proxima: 20,
      },
    ],
  },
  {
    id: 20,
    titulo: "Encerramento",
    enunciado:
      "Todas as evidências, medidas e decisões foram reunidas.",
    alternativas: [
      {
        texto:
          "Encaminhar o caso e recomendar correções preventivas.",
        proxima: "vitoria",
      },
      {
        texto: "Voltar à revisão final dos artefatos.",
        proxima: 17,
      },
      {
        texto: "Entregar o relatório com cadeia de custódia completa.",
        proxima: "vitoria",
      },
    ],
  },
];
