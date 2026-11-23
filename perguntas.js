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
        texto: "Avançar 3 questões para verificar a conta comprometida.",
        proxima: 6,
      },
      {
        texto: "Ignorar os horários incomuns.",
        proxima: "fim",
        mensagem:
          "Os horários não foram verificados e informações importantes da investigação foram perdidas.",
      },
      {
        texto: "Organizar os horários e avançar para a próxima questão.",
        proxima: 4,
      },
    ],
  },
  {
    id: 4,
    titulo: "Mensagem suspeita",
    enunciado: "Uma funcionária recebeu um arquivo desconhecido.",
    alternativas: [
      {
        texto: "Abrir o anexo para verificar o arquivo.",
        proxima: "fim",
        mensagem:
          "O anexo foi aberto sem avaliação segura, comprometendo a contenção do incidente.",
      },
      {
        texto: "Avançar 3 questões para avaliar a conta comprometida.",
        proxima: 7,
      },
      {
        texto: "Preservar a mensagem e avançar para a próxima questão.",
        proxima: 5,
      },
    ],
  },
  {
    id: 5,
    titulo: "Compartilhamento",
    enunciado: "É necessário documentar a mensagem recebida.",
    alternativas: [
      {
        texto: "Apagar a mensagem suspeita.",
        proxima: "fim",
        mensagem:
          "A mensagem foi apagada antes de ser documentada, comprometendo a preservação da evidência.",
      },
      {
        texto: "Avançar 3 questões para verificar a propagação.",
        proxima: 8,
      },
      {
        texto: "Registrar os dados e avançar para a próxima questão.",
        proxima: 6,
      },
    ],
  },
  {
    id: 6,
    titulo: "Conta comprometida",
    enunciado: "Há forte indicação de acesso não autorizado.",
    alternativas: [
      {
        texto: "Manter a conta ativa sem validação.",
        proxima: "fim",
        mensagem:
          "A conta suspeita permaneceu ativa sem validação, permitindo que o incidente continuasse.",
      },
      {
        texto: "Avançar 3 questões para confirmar a autorização.",
        proxima: 9,
      },
      {
        texto: "Bloquear temporariamente a conta e avançar uma questão.",
        proxima: 7,
      },
    ],
  },
  {
    id: 7,
    titulo: "Dispositivo suspeito",
    enunciado: "O arquivo pode ter sido executado em um computador.",
    alternativas: [
      {
        texto: "Reiniciar o dispositivo sem registrar a ação.",
        proxima: "fim",
        mensagem:
          "O dispositivo foi reiniciado sem registro, podendo destruir evidências relevantes.",
      },
      {
        texto: "Avançar 3 questões para consultar os relatórios técnicos.",
        proxima: 10,
      },
      {
        texto: "Acionar o técnico e avançar para a próxima questão.",
        proxima: 8,
      },
    ],
  },
  {
    id: 8,
    titulo: "Propagação",
    enunciado: "Outras pessoas podem ter recebido a mesma mensagem.",
    alternativas: [
      {
        texto: "Encaminhar a mensagem a todos sem orientação.",
        proxima: "fim",
        mensagem:
          "A mensagem foi disseminada sem controle, ampliando a exposição e dificultando a contenção.",
      },
      {
        texto: "Avançar 3 questões para comunicar a equipe de resposta.",
        proxima: 11,
      },
      {
        texto: "Solicitar relatos e avançar para a próxima questão.",
        proxima: 9,
      },
    ],
  },
  {
    id: 9,
    titulo: "Autorização",
    enunciado: "A equipe precisa confirmar a ação seguinte.",
    alternativas: [
      {
        texto: "Agir sem autorização da equipe responsável.",
        proxima: "fim",
        mensagem:
          "A ação foi tomada sem autorização e fora do plano de resposta da organização.",
      },
      {
        texto: "Avançar 3 questões para comunicar a equipe de resposta.",
        proxima: 12,
      },
      {
        texto: "Seguir o plano e avançar para a próxima questão.",
        proxima: 10,
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
        texto: "Alterar os registros para confirmar a hipótese.",
        proxima: "fim",
        mensagem:
          "Os registros foram alterados, comprometendo sua integridade e a investigação.",
      },
      {
        texto: "Avançar 3 questões para analisar a origem da ameaça.",
        proxima: 13,
      },
      {
        texto: "Avançar para os relatórios técnicos.",
        proxima: 11,
      },
    ],
  },
  {
    id: 11,
    titulo: "Relatórios técnicos",
    enunciado: "Os técnicos encontraram artefatos relevantes.",
    alternativas: [
      {
        texto: "Descartar os artefatos ainda não identificados.",
        proxima: "fim",
        mensagem:
          "Artefatos potencialmente relevantes foram descartados antes de uma análise técnica.",
      },
      {
        texto: "Avançar 3 questões para revisar a integridade dos logs.",
        proxima: 14,
      },
      {
        texto: "Solicitar uma segunda revisão técnica.",
        proxima: 12,
      },
    ],
  },
  {
    id: 12,
    titulo: "Equipe de resposta",
    enunciado: "A contenção precisa ser comunicada.",
    alternativas: [
      {
        texto: "Compartilhar detalhes fora dos canais autorizados.",
        proxima: "fim",
        mensagem:
          "Informações do incidente foram compartilhadas fora dos canais autorizados.",
      },
      {
        texto: "Avançar 3 questões para catalogar as evidências.",
        proxima: 15,
      },
      {
        texto: "Informar os responsáveis autorizados e avançar uma questão.",
        proxima: 13,
      },
    ],
  },
  {
    id: 13,
    titulo: "Integridade dos logs",
    enunciado: "É necessário garantir que os registros não sejam alterados.",
    alternativas: [
      {
        texto: "Editar os logs originais para corrigir inconsistências.",
        proxima: "fim",
        mensagem:
          "Os logs originais foram editados, comprometendo sua integridade e cadeia de custódia.",
      },
      {
        texto: "Avançar 3 questões para revisar a comunicação segura.",
        proxima: 16,
      },
      {
        texto: "Aplicar controle de integridade e avançar uma questão.",
        proxima: 14,
      },
    ],
  },
  {
    id: 14,
    titulo: "Origem da ameaça",
    enunciado: "O endereço usado na mensagem precisa ser investigado.",
    alternativas: [
      {
        texto: "Atribuir a origem sem confirmar os registros.",
        proxima: "fim",
        mensagem:
          "A origem foi atribuída sem confirmação, levando a uma conclusão sem evidências suficientes.",
      },
      {
        texto: "Consultar os registros e avançar para a próxima questão.",
        proxima: 15,
      },
      {
        texto: "Retroceder à questão anterior para revisar os logs.",
        proxima: 13,
      },
    ],
  },
  {
    id: 15,
    titulo: "Catalogação",
    enunciado: "Os arquivos coletados precisam ser classificados.",
    alternativas: [
      {
        texto: "Misturar hipóteses com evidências confirmadas.",
        proxima: "fim",
        mensagem:
          "Hipóteses foram misturadas com evidências confirmadas, comprometendo a confiabilidade do relatório.",
      },
      {
        texto: "Avançar 3 questões para revisar a linha do tempo final.",
        proxima: 18,
      },
      {
        texto: "Separar evidências, cópias e hipóteses e avançar uma questão.",
        proxima: 16,
      },
    ],
  },
  {
    id: 16,
    titulo: "Comunicação segura",
    enunciado: "Uma atualização precisa ser enviada à equipe.",
    alternativas: [
      {
        texto: "Enviar dados sensíveis por um canal não autorizado.",
        proxima: "fim",
        mensagem:
          "Dados sensíveis foram enviados por um canal não autorizado, expondo informações do incidente.",
      },
      {
        texto: "Avançar 3 questões para revisar os artefatos.",
        proxima: 19,
      },
      {
        texto: "Usar o canal oficial e avançar para a próxima questão.",
        proxima: 17,
      },
    ],
  },
  {
    id: 17,
    titulo: "Linha do tempo final",
    enunciado: "Os fatos precisam ser organizados antes da conclusão.",
    alternativas: [
      {
        texto: "Concluir sem validar fontes e horários.",
        proxima: "fim",
        mensagem:
          "A investigação foi concluída sem validar as fontes e os horários dos fatos.",
      },
      {
        texto: "Avançar para a análise dos artefatos.",
        proxima: 18,
      },
      {
        texto: "Retroceder à questão anterior para revisar a catalogação.",
        proxima: 16,
      },
    ],
  },
  {
    id: 18,
    titulo: "Análise dos artefatos",
    enunciado: "Os resultados precisam ser confirmados.",
    alternativas: [
      {
        texto: "Tratar um artefato isolado como prova definitiva.",
        proxima: "fim",
        mensagem:
          "Um artefato isolado foi tratado como prova definitiva sem confirmação independente.",
      },
      {
        texto: "Avançar para a revisão independente.",
        proxima: 19,
      },
      {
        texto: "Retroceder à questão anterior para confirmar a linha do tempo.",
        proxima: 17,
      },
    ],
  },
  {
    id: 19,
    titulo: "Revisão independente",
    enunciado: "Alguém deve validar as conclusões.",
    alternativas: [
      {
        texto: "Dispensar a revisão independente.",
        proxima: "fim",
        mensagem:
          "As conclusões não foram validadas por uma revisão independente.",
      },
      {
        texto: "Avançar para a questão de encerramento.",
        proxima: 20,
      },
      {
        texto: "Retroceder à questão anterior para conferir os artefatos.",
        proxima: 18,
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
        texto: "Encerrar sem entregar os resultados à equipe responsável.",
        proxima: "fim",
        mensagem:
          "O caso foi encerrado sem que os resultados fossem encaminhados aos responsáveis.",
      },
      {
        texto: "Retroceder à questão anterior para revisar as conclusões.",
        proxima: 19,
      },
      {
        texto:
          "Encaminhar o caso e recomendar correções preventivas.",
        proxima: "vitoria",
      },
    ],
  },
];
