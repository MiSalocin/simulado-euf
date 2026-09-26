import { Area } from '$lib/models/area';
import { QuestionAlternative, Version, type Question } from '$lib/models/question';
import { tagsForArea, TagEM, TagMC } from '$lib/models/subareas';

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
			text: String.raw`Um projétil de massa m é lançado verticalmente para cima a partir da superfície da Terra, em uma posição sobre a linha do equador, com velocidade inicial $v_0\^z$. Considere que a Terra gira com velocidade angular constante de módulo $\Omega$, o campo gravitacional local é $g = −g\^z$, e as direções $\^x$ e $\^y$ apontam, respectivamente, para leste e norte. Determine, em primeira ordem em $\Omega$, as equações de movimento para as coordenadas $x$ e $y$ neste referencial. Despreze a resistência do ar e efeitos de segunda ordem em $\Omega$.`
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
			text: String.raw`Um cubo homogêneo de massa $m$ e lado $L$ está em repouso sobre uma superfície horizontal, plana, dura e rugosa. Uma força externa de módulo $F > 0$ é aplicada uniformemente sobre a aresta superior direita, como ilustrado na figura.<br/>
			A aceleração da gravidade é $−g\^z$, o coeficiente de atrito estático entre o cubo e a superfície é $\mu$ e na região abaixo do cubo existe uma pressão $P(x)$, onde a coordenada $x$ varia no intervalo $−L/2 \leq x \leq L/2$.
			Considere as seguintes afirmações:<br/><br/>
			I.   A força de atrito total entre o bloco e a superfície é −μmgˆx.<br/>
			II.  A pressão $P (x) = mg/L^2$ é constante.<br/>
			III. Pelo equilíbrio de forças, a pressão é tal que $L\int^{L/2}_{-L/2} dx P(x) = mg$.<br/>
			IV.  Pelo equilíbrio de torques, a pressão é tal que $\int^{L/2}_{−L/2} dx\hspace{2px}xP(x) = F$.<br/>
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
			text: String.raw`Situação 1: Um feixe contínuo de partículas não interagentes de massa $m$, viajando com velocidade constante de módulo $v$, incide perpendicularmente sobre uma placa circular plana de raio $R$ (vide a figura). Uma força externa de módulo $F$ é aplicada para manter a placa em repouso sob a ação do feixe.<br/><br/>
			
			Situação 2: Um cone reto de semiângulo $\alpha$ (vide a figura) é fixado à placa de modo que sua base circular se encaixe perfeitamente sobre ela, com o vértice apontado na direção oposta ao fluxo de partículas. Para manter o conjunto em repouso sob o mesmo feixe, a força externa necessária passa a ser $F'$<br/><br/>

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
			text: String.raw`Uma partícula de massa $m$ move-se sem atrito sob a ação da gravidade $\bold{g} = −g\^z$ sobre a superfície de um parabolóide de revolução descrito por $z(r) = \alpha r^2$, onde $r$ é a distância ao eixo $z$ e $\alpha > 0$ é uma constante (vide figura). Utilizando coordenadas cilíndricas $(r,θ,z)$, considere as seguintes afirmações sobre o sistema:</br></br>
			
			I. A lagrangiana do sistema em função das coordenadas generalizadas, $r$ e $θ$, e de suas respectivas velocidades, $\dot{r}$ e $\dot{θ}$, é dada por $L = \frac{1}{2} m(1 + 4\alpha^2r^2)\dot{r}^2 + \frac{1}{2} mr^2 \dot{\theta}^2 − mg\alpha r^2$.</br>
			II. Como a coordenada $\theta$ é cíclica, o momento angular conjugado $p_\theta = mr^2\dot{\theta}$ é uma constante de movimento.</br>
			III. O potencial efetivo associado ao movimento radial da partícula é $V_{eff} = p^2θ^2mr^2 + mg\alpha r^2$.</br></br>
			
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
			text: String.raw`Um disco de raio $R$ pode girar em torno de um eixo vertical que passa por seu centro. Um pequeno bloco de massa $m$ é colocado sobre o disco, junto à sua borda, a uma distância $R$ do eixo de rotação. Inicialmente, o disco e o bloco estão em repouso. A partir de certo instante, o disco passa a girar com aceleração angular constante $\alpha$, conforme ilustrado na figura. Devido ao atrito estático entre o bloco e o disco, caracterizado pelo coeficiente $\mu_e$, o bloco inicialmente permanece em repouso em relação ao disco, girando junto com ele, com a mesma aceleração angular. Quando a velocidade angular atinge um valor crítico, o atrito estático não é mais suficiente para manter esse movimento e o bloco começa a deslizar sobre o disco. Determine o deslocamento angular $\Delta \theta$ realizado pelo disco desde o início do movimento até o instante em que o bloco começa a deslizar. Considere que $\alpha < \mu_e g/R$, onde $g$ é a aceleração da gravidade.`,
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
			youtubeVideoId: videos[Area.MecanicaClassica]
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
			youtubeVideoId: videos[Area.MecanicaClassica]
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
	}
];
