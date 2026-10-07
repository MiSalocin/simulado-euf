import { Area } from '$lib/models/area';
import { QuestionAlternative, Version, type Question } from '$lib/models/question';
import { tagsForArea, TagEM, TagFM, TagMC, TagTD } from '$lib/models/subareas';

const defaultData = {
	year: 2026,
	semester: 2,
	correct: QuestionAlternative.A, // Gabarito sempre coloca a alternativa A como correta
	tags: [],
	help: {}
};

const videos = {
	[Area.MecanicaClassica]: '',
	[Area.Eletromagnetismo]: '',
	[Area.FisicaModerna]: '',
	[Area.MecanicaQuantica]: '',
	[Area.Termodinamica]: '',
	[Area.FisicaEstatistica]: ''
};

export default <Question[]>[
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.EquacoesLagrangeHamilton),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Um projétil de massa m é lançado verticalmente para cima a partir da superfície 
      da Terra, em uma posição sobre a linha do equador, com velocidade inicial $v_0\^z$. Considere que 
      a Terra gira com velocidade angular constante de módulo $\Omega$, o campo gravitacional local é 
      $g = −g\^z$, e as direções $\^x$ e $\^y$ apontam, respectivamente, para leste e norte. Determine, 
      em primeira ordem em $\Omega$, as equações de movimento para as coordenadas $x$ e $y$ neste 
      referencial. Despreze a resistência do ar e efeitos de segunda ordem em $\Omega$.`
		},
		alternatives: [
			{
				text: String.raw`$\ddot{x}=-2(v_0-gt)\Omega; \ddot{y}=0$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\ddot{x}=0; \ddot{y}=0$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\ddot{x}=(v_0-gt)\Omega; \ddot{y}=-(v_0-gt)\Omega$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\ddot{x}=0; \ddot{y}=2(v_0-gt)\Omega$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\ddot{x}=0; \ddot{y}=-2(v_0-gt)\Omega$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.DinamicaCorposRigidos, TagMC.LeisDeNewton),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Um cubo homogêneo de massa $m$ e lado $L$ está em repouso sobre uma superfície 
      horizontal, plana, dura e rugosa. Uma força externa de módulo $F > 0$ é aplicada uniformemente 
      sobre a aresta superior direita, como ilustrado na figura.<br/>
			A aceleração da gravidade é $−g\^z$, o coeficiente de atrito estático entre o cubo e a superfície 
      é $\mu$ e na região abaixo do cubo existe uma pressão $P(x)$, onde a coordenada $x$ varia no 
      intervalo $−L/2 \leq x \leq L/2$.

			Considere as seguintes afirmações:<br/><ol type='I'>
			  <li> A força de atrito total entre o bloco e a superfície é −μmgˆx.<br/>
			  <li> A pressão $P (x) = mg/L^2$ é constante.<br/>
			  <li> Pelo equilíbrio de forças, a pressão é tal que $L\int^{L/2}_{-L/2} dx P(x) = mg$.<br/>
			  <li> Pelo equilíbrio de torques, a pressão é tal que $\int^{L/2}_{−L/2} dx\hspace{2px}xP(x) = F$.
      <ol/>
			Assinale a alternativa correta.`,
			image: '2026-2/mc-2.webp'
		},
		alternatives: [
			{
				text: 'Apenas as afirmações III e IV são corretas',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas as afirmações I e II são corretas',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas as afirmações II e IV são corretas',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas a afirmação II é correta',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas as afirmações I e III são corretas',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.LeisDeNewton),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`<b>Situação 1:</b> Um feixe contínuo de partículas não interagentes de massa $m$, 
      viajando com velocidade constante de módulo $v$, incide perpendicularmente sobre uma placa 
      circular plana de raio $R$ (vide a figura). Uma força externa de módulo $F$ é aplicada para 
      manter a placa em repouso sob a ação do feixe.<br/><br/>
			
			<b>Situação 2:</b> Um cone reto de semiângulo $\alpha$ (vide a figura) é fixado à placa de modo que 
      sua base circular se encaixe perfeitamente sobre ela, com o vértice apontado na direção 
      oposta ao fluxo de partículas. Para manter o conjunto em repouso sob o mesmo feixe, a força 
      externa necessária passa a ser $F'$<br/><br/>

			Supondo que todas as colisões entre as partículas e as superfícies são elásticas, determine a razão $F/F'$.`,
			image: '2026-2/mc-3.webp'
		},
		alternatives: [
			{
				text: String.raw`$\frac{F}{F'}=\frac{1}{\sin^2{\alpha}}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{F}{F'}=\frac{1}{\sin{\alpha}}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{F}{F'}=\frac{1}{\sqrt{\sin{\alpha}}}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{F}{F'}=\sin{\alpha}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{F}{F'}=\sin^2{\alpha}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(
			TagMC.EquacoesLagrangeHamilton,
			TagMC.MovimentoDuasTresDimensoes
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Uma partícula de massa $m$ move-se sem atrito sob a ação da gravidade 
      $\bold{g} = −g\^z$ sobre a superfície de um parabolóide de revolução descrito por 
      $z(r) = \alpha r^2$, onde $r$ é a distância ao eixo $z$ e $\alpha > 0$ é uma constante 
      (vide figura). Utilizando coordenadas cilíndricas $(r,θ,z)$, considere as seguintes 
      afirmações sobre o sistema:</br><ol type='I'>
			
		  	<li> A lagrangiana do sistema em função das coordenadas generalizadas, $r$ e $θ$, e de 
        suas respectivas velocidades, $\dot{r}$ e $\dot{θ}$, é dada por 
        $L = \frac{1}{2} m(1 + 4\alpha^2r^2)\dot{r}^2 + \frac{1}{2} mr^2 \dot{\theta}^2 − mg\alpha r^2$.</br>

		  	<li> Como a coordenada $\theta$ é cíclica, o momento angular conjugado $p_\theta = mr^2\dot{\theta}$ é uma constante de movimento.</br>
		  	<li> O potencial efetivo associado ao movimento radial da partícula é $V_{eff} = p^2θ^2mr^2 + mg\alpha r^2$.</ol>
			
			Assinale a alternativa correta`,
			image: '2026-2/mc-4.webp'
		},
		alternatives: [
			{
				text: 'Todas as afirmações são corretas',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas as afirmações I e II são corretas',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas as afirmações I e III são corretas',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas a afirmação I é correta',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas a afirmação II é correta',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.LeisDeNewton, TagMC.DinamicaCorposRigidos),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 5,
		statement: {
			text: String.raw`Um disco de raio $R$ pode girar em torno de um eixo vertical que passa por 
      seu centro. Um pequeno bloco de massa $m$ é colocado sobre o disco, junto à sua borda, a uma 
      distância $R$ do eixo de rotação. Inicialmente, o disco e o bloco estão em repouso. A partir de 
      certo instante, o disco passa a girar com aceleração angular constante $\alpha$, conforme 
      ilustrado na figura. Devido ao atrito estático entre o bloco e o disco, caracterizado pelo coeficiente 
      $\mu_e$, o bloco inicialmente permanece em repouso em relação ao disco, girando junto com ele, com a 
      mesma aceleração angular. Quando a velocidade angular atinge um valor crítico, o atrito estático não é 
      mais suficiente para manter esse movimento e o bloco começa a deslizar sobre o disco. Determine o 
      deslocamento angular $\Delta \theta$ realizado pelo disco desde o início do movimento até o instante 
      em que o bloco começa a deslizar. Considere que $\alpha < \mu_e g/R$, onde $g$ é a aceleração da gravidade.`,
			image: '2026-2/mc-5.webp'
		},
		alternatives: [
			{
				text: String.raw`$\Delta\theta=\frac{1}{2}\sqrt{\left(\frac{\mu_e g}{\alpha R}\right)^2-1}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\Delta\theta=\frac{\mu_e g}{\alpha R}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\Delta\theta=\frac{1}{2}\sqrt{\left(\frac{\mu_e g}{\alpha R}\right)^2+1}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\Delta\theta=\frac{1}{2}\left(\frac{\mu_e g}{\alpha R}+1\right)$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\Delta\theta=\frac{1}{2}\left(\frac{\mu_e g}{\alpha R}-1\right)$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.LeisDeNewton),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 6,
		statement: {
			text: String.raw`Em um experimento realizado em um trilho de ar, dois carrinhos, $A$ e $B$, de massas $m_A$ e $m_B$ , respectivamente, sofrem uma colisão unidimensional. Antes da colisão, o carrinho $A$ move-se ao longo do trilho, enquanto o carrinho $B$ permanece em repouso na posição $x = 90\hspace{3px}cm$. A colisão é perfeitamente inelástica, de modo que, após o choque, os dois carrinhos passam a se mover juntos com a mesma velocidade. Por descuido, os alunos não registraram as massas dos carrinhos. No entanto, eles obtiveram o gráfico da posição $x$ de cada carrinho em função do tempo $t$, mostrado na figura. Desprezando a ação de forças externas na direção do movimento, determine a razão $m_A/m_B$ entre as massas`,
			image: '2026-2/mc-6.webp'
		},
		alternatives: [
			{
				text: String.raw`$\frac{m_A}{m_B}=\frac{1}{2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{m_A}{m_B}=\frac{1}{5}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{m_A}{m_B}=1$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{m_A}{m_B}=2$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{m_A}{m_B}=5$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.GravitacaoNewtoniana),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`Um toboágua de um parque aquático é representado na figura. Uma pessoa parte do repouso no ponto $A$, situado a uma altura $H$ em relação ao solo. Nas proximidades do ponto $B$, o toboágua apresenta uma curva que é aproximadamente um arco de circunferência de raio $R$. O ponto $B$ encontra-se a uma altura $h = R$ em relação ao solo, com $H > R$.
			Desprezando o atrito, determine o valor máximo da altura $H$ para que a pessoa passe pelo ponto $B$ sem perder contato com a superfície do toboágua, evitando acidentes. Considere $g$ como a aceleração da gravidade e assuma que a pessoa é uma partícula puntiforme.`,
			image: '2026-2/mc-7.webp'
		},
		alternatives: [
			{
				text: String.raw`$H=\frac{3R}{2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$H=R$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$H=\frac{5R}{2}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$H=2R$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$H=3R$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.LeisDeNewton),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 8,
		statement: {
			text: String.raw`Uma partícula de massa $m$ é lançada do solo com velocidade inicial de módulo $v_0$, formando um ângulo $\theta$ com a horizontal. Ao atingir o ponto mais alto de sua trajetória, a partícula explode instantaneamente e se divide em dois fragmentos, de massas $m/3$ e $2m/3$. Imediatamente após a explosão, o fragmento de massa $m/3$ fica momentaneamente em repouso e, em seguida, cai verticalmente, atingindo o solo exatamente abaixo do ponto onde ocorreu a explosão. O fragmento de massa $2m/3$ segue uma nova trajetória parabólica até atingir o solo, como mostrado na figura.</br>
			Determine a distância horizontal $D$ entre os pontos de impacto dos dois fragmentos. Expresse sua resposta em termos de $v_0$, $\theta$ e da aceleração da gravidade $g$. Despreze a resistência do ar e o impulso de forças externas durante a explosão.`,
			image: '2026-2/mc-8.webp'
		},
		alternatives: [
			{
				text: String.raw`$D=\frac{3v_0^2\sin(2\theta)}{4g}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$D=\frac{v_0^2\sin(2\theta)}{2g}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$D=\frac{3v_0^2\sin(2\theta)}{2g}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$D=\frac{v_0^2\sin(2\theta)}{g}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$D=\frac{2v_0^2\sin(2\theta)}{3g}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.CamposEletrostaticos, TagEM.EquacoesMaxwell),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Uma carga puntiforme $Q > 0$ está fixa na origem de um sistema de coordenadas. Concêntrica a essa carga, encontra-se uma casca esférica não condutora, de raio interno $a$ e raio externo $b$, cuja densidade volumétrica de carga é dada por
			</br>$$\rho(r) = Ar,\hspace{10px} a < r < b,$$</br>
			onde $r$ é a distância à origem. Qual deve ser o valor da constante $A$ para que o módulo do campo elétrico $E(r)$ seja independente de $r$ em toda a região $a < r < b$?`
		},
		alternatives: [
			{
				text: String.raw`$D=\frac{Q}{2\pi a^2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$D=\frac{Q}{4\pi a^2}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$D=\frac{Q}{4\pi b^2}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$D=\frac{Q}{2\pi ab}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$D=\frac{Q}{\pi (b^2-a^2)}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.CamposMagneticosCorrentesEstacionarias),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Três fios retilíneos, infinitamente longos e paralelos entre si, são perpendiculares ao plano $xy$. Os pontos em que os fios atravessam esse plano coincidem com os vértices $A$, $B$ e $C$ de um triângulo equilátero de lado $d$. Os fios $A$ e $B$ conduzem correntes de módulo $I$, enquanto o fio $C$ conduz uma corrente de módulo $2I$. As três correntes têm o mesmo sentido. </br>Qual é o módulo da força magnética por unidade de comprimento sobre o fio $A$, devido aos fios $B$ e $C$?`
		},
		alternatives: [
			{
				text: String.raw`$\frac{F}{L}=\frac{\sqrt{7}}{2}\frac{\mu_0 I^2}{\pi d}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{F}{L}=\frac{\sqrt{3}}{2}\frac{\mu_0 I^2}{\pi d}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{F}{L}=\frac{\mu_0 I^2}{\pi d}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{F}{L}=\frac{1}{2}\frac{\mu_0 I^2}{\pi d}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{F}{L}=\frac{3}{2}\frac{\mu_0 I^2}{\pi d}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(
			TagEM.EquacoesPoissonLaplace,
			TagEM.CamposEletrostaticos
		),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Um capacitor esférico é constituído por duas cascas condutoras concêntricas, de raios $a$ e $b$, com $a < b$. O espaço entre as cascas é preenchido por vácuo. Determine o raio $R$, com $a < R < b$, tal que metade da energia eletrostática total armazenada no capacitor esteja localizada na região $a < r < R$.`
		},
		alternatives: [
			{
				text: String.raw`$R=\frac{2ab}{a+b}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$R=\frac{a+b}{2}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$R=\frac{ab}{b-a}\ln \left(\frac{b}{a}\right)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$R=\frac{\sqrt{a^2+b^2}}{2}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$R=\sqrt{ab}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.EquacoesMaxwell),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Uma onda eletromagnética plana propaga-se no vácuo no sentido positivo do eixo $z$. Seu campo elétrico é dado por
			$$E(z,t) = \frac{E_0}{5} (3\^x − 4\^y) \cos (kz − \omega t).$$
			Qual é o campo magnético B(z,t) e a intensidade média I da onda?`
		},
		alternatives: [
			{
				text: String.raw`$B(z,t) = \frac{E_0}{5c} (4\^x + 3\^y) \cos (kz − \omega t),\hspace{15px}I=\frac{1}{2}c\epsilon_0E_0^2$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$B(z,t) = \frac{E_0}{5c} (-4\^x - 3\^y) \cos (kz − \omega t),\hspace{15px}I=\frac{1}{2}c\epsilon_0E_0^2$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$B(z,t) = \frac{E_0}{5c} (4\^x + 3\^y) \cos (kz − \omega t),\hspace{15px}I=c\epsilon_0E_0^2$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$B(z,t) = \frac{E_0}{5c} (3\^x - 4\^y) \cos (kz − \omega t),\hspace{15px}I=\frac{1}{2}c\epsilon_0E_0^2$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$B(z,t) = \frac{E_0}{5c} (-4\^x + 3\^y) \cos (kz − \omega t),\hspace{15px}I=\frac{1}{4}c\epsilon_0E_0^2$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.EquacoesMaxwell),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 5,
		statement: {
			text: String.raw`Um cilindro condutor longo de raio $a$, cujo eixo é perpendicular ao plano $xy$, é colocado em um campo elétrico externo uniforme $E = E_0 \^x$. Sendo $\rho$ e $\varphi$ as coordenadas cilíndricas usuais, temos que para $\rho < a$ (região no interior do cilindro) o potencial eletrostático é nulo. Já na região $\rho > a$, o potencial eletrostático é dado por $V (\rho,\varphi) = −E_0\left ( ρ − \frac{a^2}{\rho} \right)\cos \varphi$. A densidade superficial de carga $\sigma$ na parede do cilindro é dada por:`
		},
		alternatives: [
			{
				text: String.raw`$\sigma=2\epsilon_0E_0\cos \phi$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\sigma=2\epsilon_0E_0\sin \phi$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\sigma=2\epsilon_0E_0\cos^2 \phi$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\sigma=2\epsilon_0E_0$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\sigma=0$, pois o cilindro condutor é um equipotencial`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.PropagacaoOndasEletromagneticas),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 6,
		statement: {
			text: String.raw`Em um certo regime de frequência $\omega$, a dispersão de ondas eletromagnéticas em metais é caracterizada pela relação de dispersão $\omega^2 = c^2k^2 + \omega^2_P$, onde $c$ é a velocidade da luz no vácuo, $k$ é o módulo do vetor de onda e $\omega_P$ é a frequência de plasma, um parâmetro característico do meio. Com base nesta relação de dispersão, podemos afirmar que:`
		},
		alternatives: [
			{
				text: String.raw`Para $\omega > \omega_P$ , a onda eletromagnética se propaga no metal com velocidade de fase maior do que $c$, mas velocidade de grupo menor do que $c$.`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\omega_P$ é uma frequência de corte e só há propagação de ondas eletromagnéticas no metal para $\omega = \omega_P$ .`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\omega_P$ é uma frequência de corte e só há propagação de ondas eletromagnéticas em um metal para $\omega < \omega_P$ .`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`Para $\omega < \omega_P$, a onda eletromagnética se propaga no metal com velocidade de fase maior do que $c$, mas velocidade de grupo menor do que $c$.`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`A relação entre $\omega$ e $\omega_P$ não tem qualquer consequência para a propagação de ondas eletromagnéticas em um metal.`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(
			TagEM.ForcaEletromotrizInduzida,
			TagEM.EquacoesMaxwell
		),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`Considere um circuito constituído por um capacitor de capacitância $C$ e um resistor de resistência $R$. Inicialmente, o circuito está aberto e o capacitor encontra-se carregado com carga total $Q_0$. Em $t = 0$, a chave do circuito é fechada. Qual dos gráficos abaixo melhor representa a carga $Q(t)$ no capacitor, em unidades de $Q_0$, em função do tempo $t$, em unidades de $RC$?`,
			image: '2026-2/em-7.webp'
		},
		alternatives: [
			{
				text: String.raw`$IV$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$II$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$III$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$I$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$V$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(TagTD.SegundaLeiEntropia),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Um corpo sólido encontra-se inicialmente à temperatura $4T_0$ e é colocado em contato térmico com um reservatório mantido à temperatura constante $T_0$ até atingir o equilíbrio térmico. Neste intervalo de temperatura, a capacidade térmica do corpo é dada por $C(T) = A + BT$, onde $A$ e $B$ são constantes positivas. $A$ variação total de entropia do universo (sistema + reservatório térmico) $(\Delta S)$ após atingir o equilíbrio é dada por:`
		},
		alternatives: [
			{
				text: String.raw`$\Delta S = A(3-\ln 4) + \frac{9}{2}BT_0$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\Delta S = A(4-\ln 3) + 3BT_0$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\Delta S = -A\ln 4 - 3BT_0$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\Delta S = 3A + \frac{15}{2}BT_0$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\Delta S = 0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(TagTD.TrabalhoPrimeiraLei),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Considere 1 mol de um gás ideal monoatômico $(C_v = \frac{3}{2}R$ e $C_p = \frac{5} {2} R)$ que realiza um ciclo termodinâmico reversível $A \to B \to C \to A$ composto pelas seguintes etapas:
			<ol>
				<li>$A \to B$: Expansão <b>isotérmica</b> à temperatura $T_0$, a partir do volume $V_A = V_0$ até $V_B = 3V_0$.</li>
				
				<li>$B \to C$: Compressão <b>isobárica</b> à pressão $P_B$ até que o volume retorne ao valor inicial $V_C = V_0$.</li>
				
				<li>$C \to A$: Aquecimento <b>isocórico</b> mantido ao volume $V_0$, retornando o gás ao estado inicial A com temperatura $T_0$.</li>
			</ol>
			Assinale a alternativa que expressa corretamente o <b>trabalho total realizado pelo gás no ciclo</b> $(W_c)$:`
		},
		alternatives: [
			{
				text: String.raw`$W_c=RT_0\left(\ln 3-\frac{2}{3}\right)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$W_c=RT_0\ln 3$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$W_c=\frac{2}{3}RT_0$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$W_c=RT_0\left(\ln 3 + \frac{2}{3}\right)$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$W_c=0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(TagTD.TrabalhoPrimeiraLei),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Para 1 mol de um gás ideal de capacidade térmica a volume constante $C_v$ , a energia livre de Helmholtz $F (T, V )$ é dada por: 
          $$F (T, V ) = C_v T\left[ 1 − \ln\left(\frac{T}{T0}\right)\right]  − RT \ln\left(\frac{V}{V0}\right)− T S_0,$$
onde $T_0$,$S_0$ e $V_0$ denotam valores constantes. O gás é submetido a uma expansão isotérmica reversível à temperatura $T$, alterando seu volume de $V_1$ para $5V_1$. O trabalho $W$ realizado pelo gás ao longo do processo acima vale`
		},
		alternatives: [
			{
				text: String.raw`$W=RT\ln5$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$W=-RT\ln 5$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$W=C_v T\ln 5$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$W=-C_v T\ln 5$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$W=0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(TagTD.TrabalhoPrimeiraLei),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`De acordo com a Termodinâmica, a função entropia $S(U, V, N )$ descrevendo um sistema qualquer deve satisfazer as seguintes propriedades: 
      <ol type='a'>
        <li> Extensividade: $S(\lambda U, \lambda V, \lambda N ) = \lambda S(U, V, N )$ para $\lambda > 0$.
        <li> Temperatura positiva:  $\left(\frac{\partial S}{\partial U}\right)_{V,N} = \frac{1}{T} > 0$.
        <li> Estabilidade (concavidade): $\left(\frac{\partial^2 S}{\partial U^2}\right)_{V,N} < 0$ (garante $C_v > 0$).

    </ol>
Sendo $A > 0$ uma constante, assinale a alternativa termodinamicamente consistente para $U, V, N > 0$:`
		},
		alternatives: [
			{
				text: String.raw`$S(U,V,N)=A(UVN)^{1/3}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$S(U,V,N)=A\frac{U^2V}{N^2}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$S(U,V,N)=A\left(\frac{N^3}{UV}\right)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$S(U,V,N)=A\left(\frac{N^3V}{U}\right)^{1/2}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$S(U,V,N)=A\left(\frac{UV^2}{N}\right)^{1/3}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.EnergiaMomentoRelativisticos),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Considere a situação ilustrada na figura. Uma fonte de luz S desconhecida é diretamente
      detectada pelo espectrômetro $D1$. Parte da luz é espalhada por um meio frio $M$ e detectada pelo espectrômetro
      $D2$. Finalmente, a luz de $S$ que atravessa $M$ é detectada pelo espectrômetro $D3$. Considere que os espectrômetros 
      estão perfeitamente calibrados. Assinale a alternativa abaixo que consistentemente representa os espectros da 
      luz (intensidade por comprimento de onda $\lambda$, em unidades arbitrárias) em $D1$, $D2$ e $D3$, respectivamente.`,
			image: '2026-2/fm-1.webp'
		},
		alternatives: [
			{
				text: String.raw`
          <img src="/assets/images/2026-2/fm-1a1.webp" style="height: 150px"/>, 
          <img src="/assets/images/2026-2/fm-1a1.webp" style="height: 150px"/>  e  
          <img src="/assets/images/2026-2/fm-1a3.webp" style="height: 150px"/>, `,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`
          <img src="/assets/images/2026-2/fm-1b1.webp" style="height: 150px"/>, 
          <img src="/assets/images/2026-2/fm-1b1.webp" style="height: 150px"/>  e  
          <img src="/assets/images/2026-2/fm-1b3.webp" style="height: 150px"/>, `,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`
          <img src="/assets/images/2026-2/fm-1c1.webp" style="height: 150px"/>, 
          <img src="/assets/images/2026-2/fm-1c1.webp" style="height: 150px"/>  e  
          <img src="/assets/images/2026-2/fm-1c3.webp" style="height: 150px"/>, `,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`
          <img src="/assets/images/2026-2/fm-1d1.webp" style="height: 150px"/>, 
          <img src="/assets/images/2026-2/fm-1d1.webp" style="height: 150px"/>  e  
          <img src="/assets/images/2026-2/fm-1d3.webp" style="height: 150px"/>, `,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`
          <img src="/assets/images/2026-2/fm-1e1.webp" style="height: 150px"/>, 
          <img src="/assets/images/2026-2/fm-1e1.webp" style="height: 150px"/>  e  
          <img src="/assets/images/2026-2/fm-1e3.webp" style="height: 150px"/>, `,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.EnergiaMomentoRelativisticos),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Uma molécula é formada por dois átomos idênticos de massa m. O potencial 
      efetivo de interação entre os átomos é $V (r) = V_0 \left[\left(\frac{a}{r}\right)^{2\alpha} − 2 \left(\frac{a}{r}\right)^\alpha\right]$, onde $V_0$, 
      $\alpha$ e $a$ são constantes positivas e $r$ é a distância entre os átomos. Qual é a diferença 
      de energia entre o estado fundamental e o primeiro estado rotacional excitado dessa molécula? 
      Assuma que $V_0$ é suficientemente grande e que o tamanho do átomo é muito menor que $a$.`
		},
		alternatives: [
			{
				text: String.raw`$\frac{2\hbar^2}{ma^2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{1}{2}V_0$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{\alpha\hbar^2}{ma^2}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\hbar\sqrt{\frac{2\alpha(3\alpha+1)V_0}{ma^2}}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\hbar\sqrt{\frac{\alpha(\alpha+1)V_0}{ma^2}}$`,
				number: QuestionAlternative.E
			}
		]
	}
];
