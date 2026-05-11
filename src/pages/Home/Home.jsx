import {
  Container,
  Hero,
  Left,
  Right,
  Title,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  HeroImage,
  BlurCircle,
  FloatingCard,
  JoinCircle,
  Features,
  FeatureCard,
  Dot,
  AboutSection,
  AboutText,
  AboutImages,
  ImageCard,
} from "./HomeStyles";

const Home = () => {
  return (
    <Container>
      {/* HERO */}
      <Hero>
        <Left>
          <p>
            Conectamos productores, agencias y talentos en un solo lugar
            mediante castings digitales y perfiles profesionales.
          </p>

          <Title>
            TALENT
            <br />
            CONNECT
          </Title>

          <Description>
            Publicá castings, descubrí artistas y encontrá oportunidades
            reales. Nuestra plataforma une productores con actores, modelos,
            bailarines, músicos y creadores.
          </Description>

          <ButtonGroup>
            <PrimaryButton>Registrarse</PrimaryButton>
            <SecondaryButton>Iniciar Sesión</SecondaryButton>
          </ButtonGroup>
        </Left>

        <Right>
          <BlurCircle />

          <HeroImage
            //src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

          <FloatingCard>
            <p>Castings activos</p>
            <h3>+120</h3>
          </FloatingCard>

          <JoinCircle>JOIN NOW</JoinCircle>
        </Right>
      </Hero>

      {/* FEATURES */}
      <Features>
        <FeatureCard>
          <Dot />

          <h3>Publicá Castings</h3>

          <p>
            Los productores pueden crear convocatorias y encontrar perfiles
            ideales rápidamente.
          </p>
        </FeatureCard>

        <FeatureCard rotate>
          <Dot />

          <h3>Mostrá tu Perfil</h3>

          <p>
            Los artistas pueden subir experiencia, fotos, videos y habilidades
            para aumentar su visibilidad.
          </p>
        </FeatureCard>

        <FeatureCard>
          <Dot />

          <h3>Conexiones Reales</h3>

          <p>
            Facilitamos el contacto entre productores y talentos de manera
            directa y profesional.
          </p>
        </FeatureCard>
      </Features>

      {/* ABOUT */}
      <AboutSection>
        <AboutText>
          <h2>
            ¿POR QUÉ
            <br />
            ELEGIRNOS?
          </h2>

          <p>
            Centralizamos oportunidades artísticas en una sola plataforma.
            Nuestro objetivo es simplificar el proceso de búsqueda de talentos y
            generar más oportunidades para artistas emergentes y profesionales.
          </p>
        </AboutText>

        <AboutImages>
         {/* <ImageCard
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

          <ImageCard
            className="down"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

          <ImageCard
            className="up"
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />

          <ImageCard
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
            alt=""
          />*/}
        </AboutImages>
      </AboutSection>
    </Container>
  );
};

export default Home;