import { Evento } from './inicio/eventos/evento/Evento.model';

export const EVENTOS: Evento[] = [
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
        'e fundamental, bem como promover a difusão dos con-'+
        'teúdos de disciplinas de programação de computado'+
        'res; identificar talentos e vocações nas escolas, de mo'+
        'do a instruir e encaminhar os alunos para carreiras aca'+
        'dêmica, científica e tecnológica, estabelecer o INF/UFG'+
        'como sede da OBI em Goiás, em todas as fases da'+
        'competição.',
        img1:'./assets/images/obi1.jpg',
        img2:'./assets/images/obi2.jpg',
        img3:'./assets/images/obi3.jpg',
        img4:'./assets/images/obi4.jpg'
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
        img4:'./assets/images/obr4.jpg'
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
        img3:'./assets/images/m3.jpg',
        img4:'./assets/images/m4.jpg'
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
        img4:'./assets/images/ia4.JPG'
    },
    {
        id: 'jges',
        nome: 'Jornada Goiana de Engenharia de Software',
        imgvertical: "../assets/images/fges-vertical.jpg",
        imghorizontal: 'http://www.inf.ufg.br/sites/default/files/uploads/chamada-jornada-goiania-software-2017.png',
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
        img4:'./assets/images/jges4.jpg'
    },
    {
        id: 'eri-ersi-erad',
        nome: 'ERI-GO ERSI-GO ERAD-GO',
        imgvertical: "../assets/images/ersigo-vertical.png",
        imghorizontal: '../assets/images/ersigo-horizontal.png',
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
        'cunho acadêmico e técnico/científico que con-'+
        'tém diversos assuntos inovadores na área de'+
        'informática cujo principal propósito é aproxi'+
        'mar a pesquisa científica das necessidades do'+
        'comércio e da indústria do estado de Goiás.',
        img1:'./assets/images/eri1.jpg',
        img2:'./assets/images/eri2.jpg',
        img3:'./assets/images/eri3.jpg',
        img4:'./assets/images/eri4.jpg'
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
        img4:'./assets/images/dev3.jpeg'
    },
    {
        id: 'esp-prof',
        nome: 'Espaço das Profissões',
        imgvertical: "../assets/images/esp-vertical.png",
        imghorizontal: 'http://www.inf.ufg.br/sites/default/files/uploads/banner_site-espaco-das-profissoes-2018.jpg?1528726046',
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
        img4:'./assets/images/esp4.jpg'
    }
];
