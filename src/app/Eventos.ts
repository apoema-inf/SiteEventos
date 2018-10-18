import { Evento } from './inicio/eventos/evento/Evento.model';

export const EVENTOS: Evento[] = [
    {
        id: 'cbs',
        nome: 'Congresso Brasileiro de Sistemas',
        imgvertical: "../assets/images/cbs-vertical.png",
        imghorizontal: '../assets/images/cbs-horizontal.png',
        periodicidade: 'Anual',
        estimativa: '300 pessoas',
        publicoalvo: 'Toda comunidade científica, pensadores e praticantes das abordagens sistêmicas, sistemistas e demais simpatizantes, em particular a comunidade de Sistemas de Informação. ',
        local: 'Universidade Federal de Goiás - UFG',
        itens: 'Não divulgado.',
        tipo: 'Congresso',
        coordenador: 'Eliomar Araújo de Lima',
        sinopse: '<a align="middle" href="assets/Programacao_14CBS.pdf" download><img src="assets/images/pdf.png">Programação Completa</a><br><br>O 14° Congresso Brasileiro de Sistemas será realizado nos dias 25 e 26 de outubro de 2018, em Goiânia, na Universidade Federal de Goiás, sob o título: "Pensamento Sistêmico em Revista: aprendizados e conquistas ante o superlativismo cibernético e a sociedade pós-industrial".<br><br>'+ 
        'Visando propagação do conhecimento que vem sendo desenvolvido na área, serão bem-vindos os trabalhos dentro das seguintes temáticas:<br>'+
        'I. Epistemologia e Pesquisa Sistêmica<br>'+
        'II. Tecnologia e Sistemas e Informação e Comunicação<br>'+
        'III. Administração e Redes entre Organizações<br>'+
        'IV. Sociologia e Políticas Públicas<br>'+
        'V. Economia e Desenvolvimento<br>'+
        'VI. Psicologia e Saúde<br>'+
        'VII. Inovação Sistêmica',
        img1:'./assets/images/cbs5.jpg',
        img2:'./assets/images/cbs2.jpeg',
        img3:'./assets/images/cbs3.jpg',
        img4:'./assets/images/cbs4.jpeg',
        img5:'./assets/images/cbs1.png',
        img6:''
    },
    {
        id: 'obr',
        nome: 'Olimpíada Brasileira de Robótica',
        imgvertical: '../assets/images/logo-obr.png',
        imghorizontal: '../assets/images/obr.png',
        periodicidade: 'Anual',
        publicoalvo: 'Alunos do Ensino Fundamental e Médio',
        local: 'Centro de Cultura e Eventos Prof. Ricardo Freua Bufáiçal - UFG',
        tipo: 'Competição de estudantes do Ensino Médio e Fundamental',
        estimativa: '1.000 pessoas',
        itens: 'Camisetas, material gráfico, lanches, placas de acrílico, placas de MDF e perfis de alumínio.',
        coordenador: 'Profa. Dra. Telma Woerle Soares e Prof. Dr. Anderson da Silva Soares',
        sinopse: 'Tem por objetivo estimular as carreiras científico-tecnológicas, identificar jovens talentos, promover debates e'+
        'atualizações sobre o tema, formar alunos capazes de'+
        'estruturar e resolver problemas e de lidar com a tecnolo'+
        'gia, especialmente robótica e estimular o estudo, a per'+
        'sistência, o trabalho em equipe, a investigação e o apren'+
        'dizado por meio da robótica.',
        img1:'./assets/images/obr1.jpg',
        img2:'./assets/images/obr2.jpg',
        img3:'./assets/images/obr3.jpg',
        img4:'./assets/images/obr4.jpg',
        img5:'./assets/images/obr5.jpg',
        img6:''
    },
    {
        id: 'obi',
        nome: 'Olimpíada Brasileira de Informática',
        imgvertical: '../assets/images/obi-vertical.png',
        imghorizontal: '../assets/images/obi-horizontal.png',
        periodicidade: 'Anual',
        publicoalvo: 'Alunos do Ensino Fundamental e Médio',
        local: 'Auditórios diversos da UFG',
        tipo: 'Competição de estudantes do ensino médio e superior',
        itens: 'Camisetas, serviços gráficos, lanches e material de papelaria.',
        estimativa: '100 pessoas',
        coordenador: 'Profº Wellington',
        sinopse: 'A Olimpíada Brasíliera de Informática tem por objetivo'+
        'aproximar a universidade e os alunos do ensino médio'+
        'e fundamental, bem como promover a difusão dos con'+
        'teúdos de disciplinas de programação de computado'+
        'res; identificar talentos e vocações nas escolas, de mo'+
        'do a instruir e encaminhar os alunos para carreiras aca'+
        'dêmica, científica e tecnológica, estabelecer o INF/UFG'+
        'como sede da OBI em Goiás, em todas as fases da'+
        'competição.',
        img1:'./assets/images/obi1.jpg',
        img2:'./assets/images/obi2.jpg',
        img3:'./assets/images/obi3.jpg',
        img4:'./assets/images/obi4.jpg',
        img5:'',
        img6:''
    },
    {
        id: 'marat-prog',
        nome: 'Maratona de Programação',
        imgvertical: "../assets/images/maratona-vertical.jpg",
        imghorizontal: '',
        periodicidade: 'Anual',
        estimativa: '180 pessoas',
        publicoalvo: 'Alunos de Graduação e Pós-graduação em cursos de informática',
        local: 'Instituto de Informática',
        itens: 'Camisetas, material gráfico, lanches, balões, passagens e diárias, inscrições, etc.',
        tipo: 'Competição de estudantes de graduação e pós-graduação.',
        coordenador: 'Prof. Dr. Humberto José Longo',
        sinopse: 'A Maratona de Programação é um evento da'+
        'Sociedade Brasileira de Computação que existe'+
        'desde o ano de 1996.'+
        'O Evento tem por objetivo promover nos alunos participan'+
        'tes a criatividade, a capacidade de trabalho em equipe, a'+
        'busca de novas soluções de software e a habilidade de'+
        'resolver problemas sob pressão. De ano para ano temos'+
        'observado que as instituições e principalmente as grandes'+
        'empresas da área têm valorizado os alunos que participam'+
        'da Maratona.',
        img1:'./assets/images/m1.jpg',
        img2:'./assets/images/m2.jpg',
        img3:'./assets/images/m6.jpg',
        img4:'./assets/images/m4.jpg',
        img5:'./assets/images/m5.jpg',
        img6:'./assets/images/m3.jpg'
    },
    {
        id: 'work-ia',
        nome: 'Workshop de Inteligência Artificial',
        imgvertical: "../assets/images/work-vertical.png",
        imghorizontal: '',
        periodicidade: 'Anual',
        estimativa: '150 pessoas',
        publicoalvo: 'Alunos de graduação e pós-graduação e profissionais da área.',
        local: 'Instituto de Informática',
        itens: 'Camisetas, serviços gráficos, lanches e estandes.',
        tipo: 'Mostra de trabalhos científicos',
        coordenador: 'Professores do Instituto de Informática da área de Inteligência Artificial.',
        sinopse: 'Workshop de trabalhos dos cursos realiza'+
        'dos pelos alunos do INF relacionados a'+
        'Inteligência Artificial.',
        img1:'./assets/images/ia1.JPG',
        img2:'./assets/images/ia2.JPG',
        img3:'./assets/images/ia3.JPG',
        img4:'./assets/images/ia4.JPG',
        img5:'',
        img6:''
    },
    {
        id: 'jges',
        nome: 'Jornada Goiana de Engenharia de Software',
        imgvertical: "../assets/images/fges-vertical.png",
        imghorizontal: '../assets/images/jges-horizontal.png',
        periodicidade: 'Anual',
        estimativa: '100 pessoas',
        publicoalvo: 'Alunos e profissionais da área de Engenharia de Software',
        local: 'Auditórios diversos da UFG',
        itens: 'Camisetas, serviços gráficos, lanches e material de papelaria',
        tipo: 'Congresso',
        coordenador: 'Prof. Dr. Fábio Nogueira de Lucena',
        sinopse: 'Fórum para intercâmbio de experiências e'+
        'para atualização de profissionais de ES.'+
        'Proporciona à comunidade goiana de soft'+
        'ware palestras e debates relacionados com'+
        'as melhores práticas da indústria de soft'+
        'ware e às novas tendências, métodos e'+
        'ferramentas.',
        img1:'./assets/images/jges1.jpg',
        img2:'./assets/images/jges2.jpg',
        img3:'./assets/images/jges3.jpg',
        img4:'./assets/images/jges5.jpg',
        img5:'./assets/images/jges4.jpg',
        img6:''
    },
    {
        id: 'eri-ersi-erad',
        nome: 'ERI-GO ERSI-GO ERAD-GO',
        imgvertical: "../assets/images/ersigo-vertical.png",
        imghorizontal: '',
        periodicidade: 'Anual',
        estimativa: '300 pessoas',
        publicoalvo: 'Alunos de Graduação e Pós-graduação, empresas, órgãos governamentais e profissionais da área.',
        local: 'Auditórios e salas de aulas da UFG',
        itens: 'Camisetas, material gráfico, lanches, passagens e diárias, inscrições, etc.',
        tipo: 'Congresso',
        coordenador: 'Professores do Instituto de Informática',
        sinopse: 'A Escola Regional de Informática – ERI, a Escola'+
        'Regional de Sistemas - ERSI e o Escola Regio'+
        'nal de Alto Desempenho - ERAD, desenvolvidos'+
        'em conjunto, pelo Instituto de Informática, de'+
        'cunho acadêmico e técnico/científico que con'+
        'tém diversos assuntos inovadores na área de'+
        'informática cujo principal propósito é aproxi'+
        'mar a pesquisa científica das necessidades do'+
        'comércio e da indústria do estado de Goiás.',
        img1:'./assets/images/eri1.jpg',
        img2:'./assets/images/eri2.jpg',
        img3:'./assets/images/eri3.jpg',
        img4:'./assets/images/eri4.jpg',
        img5:'',
        img6:''
    },
    {
        id: 'dev',
        nome: 'DEV Fest Cerrado',
        imgvertical: "../assets/images/dev-vertical.jpg",
        imghorizontal: '',
        periodicidade: 'Anual',
        estimativa: '700 pessoas',
        publicoalvo: 'Profissionais e estudantes de TI em geral',
        local: 'Salões de eventos e auditórios diversos',
        itens: 'Camisetas, serviços gráficos, lanches e material de papelaria',
        tipo: 'Congresso',
        coordenador: 'Prof. Me. Marcelo Quinta',
        sinopse: 'Grupo de Desenvolvedores do Google (GDG)'+
        'é uma comunidade global de pessoas inte'+
        'ressadas em aprender, utilizar e promover'+
        'as tecnologias oferecidas pelo Google.',
        img1:'./assets/images/dev3.jpeg',
        img2:'./assets/images/dev1.jpeg',
        img3:'./assets/images/dev4.jpeg',
        img4:'./assets/images/dev3.jpeg',
        img5:'',
        img6:''
    },
    {
        id: 'esp-prof',
        nome: 'Espaço das Profissões',
        imgvertical: "../assets/images/esp-vertical.png",
        imghorizontal: '../assets/images/esp-horizontal.jpg',
        periodicidade: 'Anual',
        estimativa: '400 pessoas',
        publicoalvo: 'Alunos do Ensino Médio',
        local: 'Centros de Aulas e Auditórios da UFG',
        itens: 'Camisetas, material gráficos, lanches.',
        tipo: 'Feira',
        coordenador: 'Coordenarores dos cursos e a Vice-Direção do Instituto de Informática',
        sinopse: 'O Espaço das Profissões é um evento que abre'+
        'as portas da UFG a estudantes do ensino médio'+
        'a fim de abordar a natureza dos diversos cursos'+
        'oferecidos, para que o estudante tenha informa'+
        'ções sobre ensino, profissão e carreira.'+
        'Há também espaços interativos, roteiros culturais'+
        'e visitas a laboratórios e institutos.',
        img1:'./assets/images/esp1.jpg',
        img2:'./assets/images/esp2.jpg',
        img3:'./assets/images/esp3.jpg',
        img4:'./assets/images/esp4.jpg',
        img5:'',
        img6:''
    }

];
