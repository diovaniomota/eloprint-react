import ContactForm from '../components/ContactForm.jsx';
import './QuemSomos.css';

const PARAGRAFOS = [
  'Na Eloprint, acreditamos que a eficiência operacional começa com as escolhas certas. Desde nossa fundação em 29 de outubro de 2018, estamos dedicados a oferecer serviços excepcionais no ramo de aluguel de impressoras e copiadoras para escritórios. Localizados em Tubarão, Santa Catarina, nossa equipe apaixonada é movida pela missão de proporcionar soluções de impressão de alta qualidade, eficientes e personalizadas para empresas de todos os portes.',
  'Nossa expertise abrange a locação de impressoras, manutenção especializada em marcas renomadas como Konica Minolta, Ricoh e HP Laser, além de assistência técnica para garantir que seu ambiente de trabalho esteja sempre operando no mais alto padrão.',
  'Nosso responsável técnico, com mais de 20 anos de experiência em manutenção de impressoras, lidera uma equipe altamente qualificada. Essa experiência robusta é um testemunho do nosso compromisso em oferecer serviços técnicos de qualidade, mantendo suas operações de impressão sempre eficientes.',
  'Na Eloprint, acreditamos que somos mais do que uma empresa de aluguel de impressoras; somos parceiros no sucesso dos nossos clientes. Trabalhamos de perto com você para entender suas necessidades específicas e oferecer soluções personalizadas que impulsionam a produtividade e eficiência em seu escritório.',
  'Estamos comprometidos com a inovação contínua e práticas sustentáveis. Nossas soluções são projetadas para oferecer desempenho excepcional enquanto minimizam o impacto ambiental, refletindo nosso compromisso com a responsabilidade social corporativa.',
  'Na Eloprint, acreditamos que as impressões vão além do papel - elas constroem conexões. Estamos aqui para ser sua parceira confiável, fornecendo não apenas máquinas e serviços, mas uma experiência completa que transforma seu ambiente de trabalho.',
  'Explore nosso site para descobrir como a Eloprint pode ser a peça-chave para otimizar suas operações de impressão e escritório. Estamos prontos para embarcar nesta jornada junto com você.',
];

export default function QuemSomos() {
  return (
    <>
      <section className="sobre">
        <div className="container sobre__inner">
          <h1 className="sobre__title">Quem somos:</h1>
          {PARAGRAFOS.map((p, i) => (
            <p key={i} className="sobre__p">{p}</p>
          ))}
        </div>
      </section>
      <section className="sobre-form">
        <div className="container sobre-form__inner">
          <ContactForm compact />
        </div>
      </section>
    </>
  );
}
