const prova = {
  data: '17/03/2026',
  docente: 'Pablo Henrique Lima dos Santos',
  curso: 'Técnico em Edificações',
  unidade: 'Projetos Executivos',
  turma: 'T TED V2',
  titulo: 'ATIVIDADE - Projeto Executivo Completo e Quantitativo de Sistemas Construtivos',
  descricao:
    'Nesta atividade avaliativa, o técnico deverá desenvolver um projeto executivo completo a partir de uma planta baixa, contemplando a definição do sistema construtivo e o levantamento de quantitativos de materiais. ' +
    'A atividade contempla interpretação de projetos, cálculos técnicos, aplicação prática de sistemas construtivos e organização de documentação técnica, consolidando a formação profissional do técnico em edificações. ' +
    'Esta não é uma prova tradicional, mas sim uma atividade prática de consolidação e aplicação do conhecimento, revisada e acompanhada em sala de aula. ' +
    'O técnico poderá consultar os materiais de apoio disponíveis em: https://drive.google.com/drive/folders/14nc59J4lV5eqgjK2O7x1ijZ3CiR3VDh4?usp=sharing',

  itens: [
    {
      capacidade:
        'Interpretar projetos arquitetônicos e elaborar projetos executivos de edificações, realizando levantamento de quantitativos e aplicando sistemas construtivos adequados conforme critérios técnicos e normativos.',

      contexto:
        'Durante a unidade curricular de Projetos Executivos, foram desenvolvidos conteúdos relacionados à leitura de planta baixa, sistemas construtivos, cálculos de quantitativos e aplicação prática em obra. ' +
        'Como parte final do processo avaliativo, o técnico deverá consolidar todo o conhecimento adquirido por meio da elaboração completa de um projeto executivo, baseado em uma planta fornecida ou própria. ' +
        'Os conteúdos abordam desde a definição do sistema construtivo até o levantamento de materiais, sendo fundamentais para a atuação profissional em campo.\n\nNesta atividade avaliativa, o técnico deverá desenvolver um projeto executivo completo a partir de uma planta baixa, contemplando a definição do sistema construtivo e o levantamento de quantitativos de materiais. ' +
    'A atividade contempla interpretação de projetos, cálculos técnicos, aplicação prática de sistemas construtivos e organização de documentação técnica, consolidando a formação profissional do técnico em edificações. ' +
    'Esta não é uma prova tradicional, mas sim uma atividade prática de consolidação e aplicação do conhecimento, revisada e acompanhada em sala de aula. ' +
    'O técnico poderá consultar os materiais de apoio disponíveis em:\n https://drive.google.com/drive/folders/14nc59J4lV5eqgjK2O7x1ijZ3CiR3VDh4?usp=sharing',

      pergunta: `
Elabore um <b>PROJETO EXECUTIVO COMPLETO</b> a partir de uma planta baixa fornecida ou de sua própria autoria.<br><br>

<b>O projeto deve contemplar, de forma técnica, organizada e aplicável à obra real, os seguintes itens:</b><br><br>

<b>1. Interpretação da Planta Baixa</b><br>
• Identificação de ambientes;<br>
• Levantamento de dimensões;<br>
• Cálculo de áreas.<br><br>

<b>2. Definição do Sistema Construtivo</b><br>
• Escolha do sistema (alvenaria, drywall, steel frame, etc.);<br>
• Justificativa técnica da escolha;<br>
• Aplicabilidade prática.<br><br>

<b>3. Levantamento de Áreas</b><br>
• Área total de paredes (A = L × H);<br>
• Desconto de vãos (portas e janelas);<br>
• Área final de execução.<br><br>

<b>4. Quantitativo de Alvenaria (ou sistema escolhido)</b><br>
• Cálculo de blocos/tijolos;<br>
• Argamassa de assentamento;<br>
• Perdas (10%).<br><br>

<b>5. Revestimentos</b><br>
• Chapisco, emboço e reboco;<br>
• Consumos por m²;<br>
• Cálculo total (duas faces).<br><br>

<b>6. Acabamentos</b><br>
• Massa corrida;<br>
• Pintura (cálculo em litros);<br>
• Consumo por m².<br><br>

<b>7. Apresentação dos Cálculos</b><br>
• Fórmulas utilizadas;<br>
• Desenvolvimento dos cálculos;<br>
• Clareza técnica.<br><br>

<b>8. Representação Técnica</b><br>
• Planta cotada;<br>
• Identificação dos ambientes;<br>
• Organização do projeto.<br><br>

<b>Requisitos gerais:</b><br>
• Linguagem técnica;<br>
• Organização lógica;<br>
• Aplicação prática de obra;<br>
• Cálculos completos;<br>
• Coerência com execução real.<br><br>

<b>Critérios de Avaliação:</b><br>

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
<thead>
<tr>
<th>Critério</th>
<th>Capacidade Avaliada</th>
<th>Sim</th>
<th>Parcial</th>
<th>Não</th>
<th>Justificativa</th>
</tr>
</thead>
<tbody>
<tr>
<td>1. Interpretação da planta</td>
<td>Interpretar corretamente as informações da planta baixa para aplicação no projeto executivo.</td>
<td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>2. Escolha do sistema construtivo</td>
<td>Selecionar e justificar tecnicamente o sistema construtivo adequado.</td>
<td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>3. Levantamento de áreas</td>
<td>Realizar corretamente o cálculo de áreas e descontos de vãos.</td>
<td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>4. Quantitativo de materiais</td>
<td>Aplicar fórmulas e calcular corretamente os materiais necessários.</td>
<td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>5. Apresentação dos cálculos</td>
<td>Organizar e demonstrar claramente os cálculos realizados.</td>
<td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>6. Organização do projeto</td>
<td>Apresentar o material de forma clara, estruturada e técnica.</td>
<td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>7. Aplicabilidade prática</td>
<td>Garantir que o projeto seja viável para execução em obra real.</td>
<td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>8. Uso de linguagem técnica</td>
<td>Utilizar termos técnicos adequados à área de edificações.</td>
<td></td><td></td><td></td><td></td>
</tr>
<tr>
<td>9. Coerência geral</td>
<td>Manter consistência entre projeto, cálculos e sistema construtivo.</td>
<td></td><td></td><td></td><td></td>
</tr>
</tbody>
</table>

<br><br>
<b>Entrega:</b><br>
• Projeto executivo completo;<br>
• Cálculos detalhados;<br>
• Pode ser digital ou manuscrito;<br>
• Nome do arquivo: <b>AV3 - Projeto Executivo Completo e Quantitativo de Sistemas Construtivos</b>.
`,
      alternativas: [],
    }
  ],
};
