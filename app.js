// app.js - versión paginada de poemas + lógica robusta (reemplazar todo el archivo actual)

/* =========================
   CONTENIDO (personalizalo)
   ========================= */

// 1) Libro: cada string es una "hoja". Pega tus 23 hojas acá (por ahora hay ejemplo)
const bookPages = [
  "Me devolviste las ganas. Y no digo las ganas de vivir, porque no quiero cargar en vos el peso de una persona suicida. Porque no quiero que entiendas y des por hecho que dependo de vos para estar vivo. Pero sí, me devolviste las ganas. Las ganas de despertarme cada mañana. Las ganas de amar. Las ganas de mirar a los ojos a mi mamá, porque ya no me da miedo que vea lágrimas, ya que ve felicidad en cada gesto de mi cara. Me devolviste las ganas de sonreír, de crecer, de seguir insistiendo. Me devolviste las ganas de mejorar. Y eso lo valoro, lo valoro muchísimo. Porque lo que causaste, causas y vas a causar en mí no es algo que se tenga que pasar por alto. Tu existencia genera en mí una motivación tal que me incita a ser feliz cuando hasta hace un tiempo quería que todo se acabe. Hoy, veo la vida con otro color.\n\nY qué locura es el tiempo. Hace dieciocho años empezaron mis primeros traumas, hace trece años me sumí en la absoluta tristeza, hace ocho años pensé en el suicidio por primera vez, hace cinco años empecé a caer en depresión y hace cuatro meses me la diagnosticaron. Hace dos meses no hablaba con vos, lo único que sabías de mí era mi nombre. Hoy, la vida vuelve a tomar sentido gracias a vos, porque me hiciste creer que no está todo perdido, que aún existen personas empáticas, que no me tengo que conformar con risas, sino que las relaciones sociales están hechas de esto, de reciprocidad absoluta. Me acostumbré a dar, a sanar heridas ajenas y, por fin, alguien se paró un segundo a pensar en cómo la estaba pasando yo. Y lo que más me gusta es tu modus operandi; en vez de taponar mis tristezas momentáneamente con dopamina, en vez de barrer la basura bajo la alfombra, agarraste mis traumas y me los hiciste pensar y repensar, me convenciste de cambiar mi mindset, agarraste mis inseguridades y con acciones las hiciste desaparecer. No estás taponando las tristezas de un hombre depresivo, estás dándole motivos a ese hombre para que esas tristezas dejen de existir. Y no, obviamente que no es solo mérito tuyo, obviamente que yo también tengo mucho que ver, pero no hubiera podido hacer nada de esto sin vos.\n\nClaro está que aunque siempre me hayas parecido linda, graciosa e inteligente, en un principio ni me imaginaba que se concrete algo así entre vos y yo. Pensé que simplemente ibas a ser mi crush mientras vos seguías feliz en tu pareja, pero decidiste jugártela por mí. Tengo grabada en mi cabeza nuestra primera interacción en persona, esa vez que me llamaste al grito dulce de ‘Iñuñu’, buscando complicidad y confianza en una persona que no conocías y que, en su peor momento de ánimo, sonrió por una sola palabra que salió de tu boca. Ciertamente, creo que guardo en mi memoria todos los momentos y conversaciones que viví con vos, aunque mi capacidad de retener información se va deteriorando poco a poco. Me acuerdo de la primera vez que vi tu sonrisa, y la primera vez que intentaste entablar una conversación conmigo en la casa de Moya. Me acuerdo la primera vez que nos quedamos solos en Discord, jugando al Dress To Impress. Me acuerdo la primera vez que nos juntamos a solas, por tu cumpleaños. Me acuerdo la primera vez que viniste a mi casa. Y sí, parece que solo hablo de la primera vez, obviamente las primeras veces son importantes, pero qué alucinante el hecho de que también me acuerdo la segunda vez que te vi, la tercera vez que hicimos llamada a solas, la cuarta vez que me abrazaste y la quinta vez que me dijiste ‘te amo’. Amo cada momento con vos, amo tu existencia, amo tu amor.",
  "Y qué inverosímil fue ese día, o esos días, o estos días, porque sigo sin creérmelo. Qué éxtasis de emociones en la que se transformó mi cerebro desde ese caluroso viernes que me dijiste que me amabas después del cumpleaños de Mac. Qué taquicardia me dio al votar ‘te doy’ en esa historia, cómo se me alteró el biorritmo al preguntarte si podía ir a tu casa en San Vicente para estar a solas. Qué nervioso me puse cuando te abracé por primera vez, qué miedo me dio hacerte mimos en la pierna. Pero valió la pena, claro que valió la pena. Fui para adelante con miedo, porque por primera vez encontré a una persona con la que no me paralizase ante situaciones tales, porque vos me diste la paz que necesitaba para dar un paso más en todo momento.\n\nEse jueves, en el que nos encontramos con un estado de triggereo total de mi parte, lograste bajarme las ansias y la tristeza hasta el subsuelo. Y poco a poco, fuiste llenando mi corazón del amor más puro. Acostados, mi corazón latía por lo menos un 50% más de lo normal. Mi mano acariciaba tu muslo y yo no podía pensar, solo sentir. Capaz empecé a confirmar que sentías algo por mí cuando escuchabas a tus papás subiendo las escaleras y, automáticamente, te alejabas de mí. Ahí se hizo evidente, algo raro había. Y sí, raro para mí que no estoy acostumbrado a ser amado, raro porque no sé lo que es ser tratado así. No fue solo raro, fue hermoso. Esa noche se terminó de gestar el amor más lindo de todos. Cuando trenzamos nuestras piernas durante la cena y Emilia cantaba de fondo al son de ‘te toco en secreto bajo la mesa’ continuó forjándose la mística más linda de todas.\n\nPorque sí. Si hay algo que caracterizó esta relación desde su concepción es que, cierto o no, nosotros estamos convencidos de que la mística está. Fuimos enumerando miles de coincidencias en el camino pero yo no me quedo con que nuestros padres se conocieran desde hace años, o con que ya había estado en la casa de Juan Mac Garva antes de que vos llegues a mi vida. Para mí, la coincidencia más linda de todas es que el universo me haya mandado a una persona con consciencia en salud mental cuando yo me negaba a entender que se podía ser saludable mentalmente. Porque como un regalo divino, llegaste para alegrarme con tus chistes y tus charlas, pero también hurgaste en lo más profundo de mi psiquis para sacar a flote conmigo una guerra que sentía perdida. Y es como te dijo Moya, yo seguía mejorando al abrirme socialmente con todos, pero nunca se vio una mejoría tan acelerada como cuando empecé a hablar con vos. Y esa, exactamente esa, es la coincidencia que más valoro entre nosotros.\n\nPero también nos complementamos, porque hay situaciones que son muy distintas entre nosotros. Yo venía de cinco años de absoluta soledad, vos venías de cinco años de absoluta compañía. El amor para nosotros dos tenía distintos significados. Para vos era una realidad, algo casi tangible porque estabas acostumbrada a su presencia. Entendías al amor como algo cotidiano. Yo no, para mí el amor se había reducido a una palabra de cuatro letras, como bien lo definió mi tía bisabuela hace ya muchos años. Y los dos nos la jugamos, los dos lo hicimos por el amor y confianza que nos transmitimos. Vos dejaste todo por mí, dejaste una relación de años, dejaste una casa. Yo dejé mis convicciones, porque hasta hace unos meses estaba seguro de que nunca iba a volver a amar pero vi algo tan distinto en vos, algo que no había sentido con nadie. Encontré un nivel de conexión tal con tu persona que se me derrumbaron todos los pensamientos pesimistas que tenía sobre el acto de amar. Tenía miedo, tenía muchísimo miedo de amar, pero lo hice igual. Tenía miedo de salir lastimado, tenía miedo de lastimar. Me daba pánico pensar en el hecho de cargar a una persona con mis pensamientos depresivos y que no sea capaz de alejarse de mí en caso de que lo necesitara, tal como se lo dije a mi psicóloga. Y fueron tantos los años en los que esa idea se fue formando en mi mente, que llegué al punto de creerme asexual, dejé de ver a las demás personas con intenciones amorosas para siempre, me encerré en mí mismo, en dedicarle el amor a mis pasiones, pero nunca me llenó eso. Yo no extrañaba el contacto físico, no extrañaba los besos, o al menos eso pensaba hasta que te conocí a vos. No voy a mentir, no los extrañaba, pero en el preciso momento en el que nos dimos nuestro primer beso, me di cuenta de cuánto necesitaba sentir algo así. Se me revolvió el estómago, las mariposas enloquecieron. Yo creo que ahí se consumó todo, en ese preciso momento en el que se concretó nuestro primer beso, dejé de prohibirme el enamorarme. Tenía mucho miedo de enamorarme y que no sea correspondido, y lo más lógico para mí era que no lo fuese. Pero en ese preciso momento, me permití amar. Me permití amar como nunca lo había hecho. Le mandé una señal directa a mi corazón para que lata más rápido cada vez que viera tu sonrisa, le confirmé a mis manos que podían añorar tu piel y le dije a mis labios que esa no iba a ser la última vez que sientan esa hermosa textura en los labios de Mía Rodríguez.",
  "Y fue muy difícil no empezar a saltar en una pata de la emoción en ese momento. La chica linda, inteligente, buena y graciosa me estaba dando bola. Una idea que había empezado a gestarse en mi cabeza mucho tiempo antes, pero que elegí descartar su posible concreción para no ilusionarme.\n\nMe fascina que sepas contenerme, porque nunca había encontrado a alguien que pueda hacerlo con tanta facilidad. Yo tengo mis propias formas de calmarme, la psicóloga me da herramientas, y no te tenés que preocupar porque dependa de vos para poder tranquilizarme en mis momentos de ansiedad, pero vos lo hacés ver tan fácil. Tus mensajes me transmiten calma, porque siempre intentás que vea las cosas con ojos más optimistas, aunque sé lo difícil que es para vos tomar tu propio consejo. Cuando me contenés por llamada, no solo intentás tranquilizarme, sino que también me halagás y me hacés sentir tranquilo con la voz más dulce que escuché en toda mi vida. Y en persona ni hablar, siempre estás atenta a que no me tiemble la pierna o a que no suspire mucho. Me agarrás la mano, me pisás el pie o me presionás la rodilla, me abrazás y me besás. Lográs que todo se calme con un par de mimos.\n\nMe fascina que seas buena persona, que siempre estés pendiente del bienestar de los demás. Y si sentís culpa por tus acciones, en vez de intentar contextualizar y excusarte, es porque no podés dejar de pensar en que los demás estén bien. Así como hacés todo para contenerme en mis peores momentos, siempre estás ahí para ayudar y aconsejar a todos tus amigos y seres queridos. Les das segundas oportunidades a los que te fallan y sos muy consciente de que todos atraviesan sus propias batallas en el día a día. Admiro tu empatía y me gusta que me la contagies. Aprendo mucho de vos.\n\nY me vuelve loco que seas inteligente, que sepas resolver situaciones complejas. A veces lográs sacar conclusiones que nunca se me hubieran ocurrido ante momentos de la vida cotidiana. Lográs ver los hilos detrás de conversaciones que a mí se me hacen normales. Porque claro, no te tenés que quedar solamente con las notas, con tu habilidad para estudiar o que te hayas tragado Carrie o Coraline. No solo sos hábil con la memoria a corto plazo o se te da bien la lectura, sos inteligente en la vida cotidiana. Tenés inteligencia emocional, inteligencia racional, inteligencia social, inteligencia creativa e inteligencia cinestésica.",
  "Y además de todo, también te das el lujo de ser la persona más graciosa que haya conocido en mi vida. Lográs hacerme reír solamente con gestos, que es algo más que complejo. Siempre estás rápida con los chistes y tenés todo un almacenamiento interno de lores para que los remates sean perfectos. Y encima nos reímos de las mismas pelotudeces, también me llena el poder hacerte reír, el parecerte gracioso y ocurrente. Porque no es solo lo que me gusta de vos, también me gusta que te gusten cosas mías. Estaba muy negado a creer que alguien iba a poder destacar algo de mí. De hecho, en julio la psicóloga me pidió que las personas de mi círculo cercano destaquen cosas buenas de mí porque yo no lograba hacerlo. Y vos me las remarcás siempre, me elevás la autoestima aunque vos no hayas sido la culpable de que yo la tenga tres metros bajo tierra.\n\nNo hay nada más lindo que el poder hablar con vos indefinidamente, que el 100% de nuestras conversaciones fluyan. Que podamos estar en Discord durante 15 horas seguidas y que no haya ni un minuto de aburrimiento, que nunca se me cruce por la cabeza la idea de irme a hacer otra cosa, porque justo ahí es donde quiero estar. Y no es solo por la situación amorosa que estamos viviendo, porque cuando yo era feliz con tu amistad esa confianza y conexión ya estaba. Ligado a eso está el hecho de que siempre que pasa algo malo, siempre que algo no nos gusta, podemos hablarlo y resolverlo, que podemos dar nuestros puntos de vista sin discutir ni enojarnos, que somos sanos para resolver esas situaciones y que siempre buscamos ponernos en el lugar del otro.\n\nTe agradezco por mostrarme tu mundo, porque me dejes conocer tus gustos y porque me hayas enseñado tantas cosas de tu pasado para llegar a un punto tal en el que creo que te conozco de toda la vida. Conozco todas tus etapas porque vos me permitiste hacerlo. Estoy dispuesto a comer pastel de papa con vos todas las veces que quieras, que me enseñes a hacerlo exactamente cómo te gusta a vos para poder replicarlo siempre que no sepa como demostrarte el amor que siento. Estoy listo para que veamos Coraline en loop, la versión extendida, el making of, videos de curiosidades y que vayamos al cine cuando la reestrenen por los veinte o los treinta años. Me entusiasma el hecho de escuchar toda la discografía de One Direction en bucle, menos Made in the A. M., porque eso no es One Direction. Muero de ganas de ir a ver a Emilia con vos, de que toquemos la guitarra juntos, de ser al primero que le cuentes la temática de tus cumpleaños, de que veamos juntos Kimetsu, Arcane y la primera temporada de American Horror Story, que escuchemos la playlist de covers de Koino Yokan mientras tomamos una Powerade roja o mientras comemos unos chupetines Pop Extreme azules\n\nHoy una persona depresiva está proyectando estas y miles de cosas más con vos, algunas que implican resultados más trascendentales. Mientras anhelo casarme con vos, me es inevitable mirar para atrás y ver las nulas ganas de existir que tenía hasta hace poco. Una de las cosas que planteé en mi primera sesión de terapia fue que no tenía ni me interesaban los planes a futuro y hoy, meses después, me voy a dormir con el sueño de irme a New York con vos para pasar navidad.\n\nMe hipnotiza tu risa y me muero de ternura cuando te masajeas los cachetes porque te duele sonreír tanto. Amo poder causar eso en una persona que amo tanto. Me encanta que te tapes la cara porque te da vergüenza que te vea riendo, porque un poco delata que estás enamorada de mí al lograr que mi mirada te intimide. Pero te quiero pedir que ya no lo hagas, que me dejes ver cómo te brillan los ojitos en tus sonrisas, cómo gesticulás mucho con la boca y como se forman unos mini hoyuelos. Dejame disfrutar esas sonrisas, que son un cachetazo de ternura que me cambian el día. Ya no necesito recurrir a películas, realities o videos de YouTube, ya que una charla con vos me da todo el entretenimiento que necesito para sonreir hasta el hartazgo.",
  "Este es solo el inicio de la que estoy convencido que va a ser la relación de mi vida y lo estoy disfrutando cada día, cada hora, cada minuto. Amo pensar en vos desde que me despierto hasta que me duermo. Me encanta que mi primer pensamiento al despertar sea desearte un buen día y preguntarte cómo dormiste. Me hace feliz dormirme en llamada, siendo tu respiración adormecida lo último que escucho antes de terminar el día, sin importar si fue uno lindo o uno triste. No quiero dejar de disfrutar todo esto y, a veces, el sobrepensar me lleva a encontrarle matices inexistentes a una relación que me da todo lo que necesito para ser feliz. Estoy convencido de que pronto dejaré de sobreanalizar todo lo que pasa entre vos y yo, porque la felicidad es tal que me lleva a darme cuenta que el futuro será alegre y tal como lo sueño. Si pienso todo esto es gracias a la confianza que me transmitís en el día a día. No estás callando mi mente, estás aniquilando los pensamientos negativos y reemplazandolos con sueños y risas a través del amor más puro que alguna vez recibí.\n\nDejé de ser consciente de muchas cosas. No sé si eso está bien o está mal, pero elijo no juzgar que el amor me ciegue. La verdad es que el frío y el calor ya me generan indiferencia. Preocupaciones pelotudas como que se me corte la luz, o no tener agua por unas horas, ya no me preocupan. La vida me empezó sonreír porque yo mismo dejé que esboce esa sonrisa. Mi mente está dejando de ver lo que me falta y elige quedarse con lo tengo. Y hoy, después de mucho tiempo creyendo que no iba a tener amor, ahí lo tengo. Y está todo envasado en una pelirroja de 155 centímetros que me hace reír cuando pensé que mi cuerpo ya no era capaz de hacerlo. El amor se me rebalsa por los poros, y no me da vergüenza. Amo que me vean enamorado porque no es algo normal en mí. Mis papás y mi hermana se mueren de amor con toda esta situación; se los conté a los tres por separado y las tres veces exclamé “estoy completamente enamorado” mientras gesticulaba alegría con cada músculo facial.\n\nMi mente se altera por completo cuando estoy con vos, porque no sé cómo digerir este sentimiento único que estoy atravesando y me encanta saber que nunca voy a aprender a hacerlo. Porque todos los días me sorprendo un poco más con la cantidad de cosas que podés generar en mí. Porque desde la primera vez que tuvimos contacto físico me di cuenta que mi corazón latía más rápido al tocarte. Y no es solo eso, porque el cansancio facial que tengo de sonreír tampoco es algo común en mí. Las mariposas que siento en la panza pensé que solamente existían en las canciones o en las películas que veía cuando era chico, pero hoy logro comprender que Ojos Color Sol habla de algo casi literal cuando describe al amor de esa manera. Porque sí, ahora los sueños son reales porque se sueña despierto, ahora la escasez de comida se vuelve deliciosa al tener la barriga llena de mariposas.",
  "Quedo embobado al observarte hablar y creo que ya quedó demostrado varias veces que puedo hacerlo por tiempo indeterminado. Me pierdo en tus rasgos. Me enloquece descubrir las pequitas que vos odias, y analizar cómo combina el arco de tu nariz con tu mirada penetrante que fusiona ternura e incandescencia. Y perdón que sea insistente con un tema que no es acorde al momento de la vida que estamos viviendo, pero cuando te veo hacer gestos que hacías de chica, sigo viendo a esa niña interior e inevitablemente me imagino el formar una familia para que puedas heredarle a nuestros hijos los rasgos más lindos del mundo. Al no conocernos hace mucho tiempo, no creo que seas consciente de lo raro que es que Iñaki Erreguerena esté proyectando el tener una familia, porque hasta hace muy poco me negaba completamente a eso. Hace ya años, mi papá me dijo que tener hijos era arruinarse la vida; y no solamente me cargó el dolor de ser un arrepentimiento para él, sino que me convenció de que nunca iba a tener una familia. Y eso que yo no creo que tener hijos sea arruinarse la vida, pero sí que espero nunca replicar una maldad tan grande como la que él me dijo a mí ese día. Hoy estoy seguro de que no va a ser así, que voy a darle todo mi corazón a esos mini Erreguerena-Rodríguez si es que en algún momento existen y que nunca cargaré en ellos mis propios traumas.\n\nSi tuviera que enumerar la totalidad de cosas que me gustan de vos, creo que nunca acabaría, pero igual suelo intentarlo con estos bosquejos que anhelan convertirse en una declaración de amor. No solo amo las cosas que hacés, sino que amo las maneras en las que existís. Esas nimiedades que me hacen dar cuenta lo bien que elegí a la mujer que amo, esos detalles que me hacen ser consciente de que ir contra mis convicciones fue la mejor decisión.\n\nMe fascina tu postura cuando estás sentada, cómo cruzás las piernas al estarlo o cómo a veces decidís esconderlas debajo de tu propia silla con un pie sobre el otro. Me vuelve loco cómo te frotas los pies cuando estás acostada, también esa tierna manera en la que caminás, cómo movés los brazos al hacerlo, y qué lindo que se ve eso desde unos 20 centímetros más arriba tuyo. Adoro cómo entrecerrás los ojos como sospechando algo, cómo ponés cara de enojada, o cuando me mirás con cara de loca. Me obsesiona cómo se te frunce la punta de la nariz cuando te reís o cuando hablás entusiasmada sobre un tema que te apasiona. Me enternece que cierres los ojos y tires la cabeza para atrás cuando te hago mimos en el cuero cabelludo, o que me agarres la mano para ver la diferencia de tamaño con la tuya. Me gusta cómo agarrás los vasos y la postura que ponés cuando escribís en un pizarrón, sacando pecho y mirando ligeramente para arriba, condicionada por ese metro y medio de puro amor en el que estás embotellada.\n\nY agradezco por todas esas veces en las que ponés tu pierna sobre la mía, esas otras en las que nos trenzamos, o en las que directamente te sentás sobre mí. Me muero de amor cuando buscás estar siempre al lado mío al caminar en grupo o cuando nos sentamos en una mesa. Me cautiva que te inclines hacia mí cuando querés un abrazo, porque no tenés miedo de demostrar que necesitas expresar ese amor que corre por tus venas.\n\nY qué locura que sos físicamente. Con esa piel suave, los ojos que reflejan la luz del sol y toman ese color almendrado que tanto me gusta analizar en tu iris. La característica forma de tu pera que sabe combinar tan bien con tu mandíbula marcada y con ese lunar que tenés en la barbilla. Qué perfección hay en la forma de tu nariz y en el tamaño de tus orejas, así como también en la forma, volumen y temperatura de esos carnosos labios que me conmueven. Amo tu frente y cómo se te plisa al gesticular. Me gustás tanto sin maquillaje pero qué bien que te quedan esos delineados que te hacés. La diferencia de tamaño entre nosotros es bastante grande y, por eso, me despierta ternura que seas tan chiquita y que tu cara pueda caber en mi mano. Qué bien que te vestís, qué lindas te quedan las polleras, las botas o las polainas. Tu pelo es fascinante, tanto lacio como ondulado o en ese punto medio que tanto odiás. Te quedan bien todos los colores y formas que le diste a lo largo de los años. Me gusta con y sin flequillo, natural o teñido, largo o corto, despeinado o con el look techno que te hiciste una vez. Me enamora el tono pálido de tu piel y lo roja que te ponés al hacer ejercicio.",
  "Y gracias por besarme, por acariciarme el bíceps, por hacerme mimos, por dormirte en mi pecho aunque soy consciente de lo difícil que es para vos conciliar el sueño por culpa de la ansiedad, por el calor que me das en cada abrazo, por agarrarme la mano, por pasarme el chicle de boca en boca, por apoyar tu cabeza en mi hombro, por tocarme en secreto bajo la mesa, por calmarme cuando tiemblo y por usar mi ropa e impregnarle tu olor.\n\nNunca me van a alcanzar las palabras para terminar de describir todo lo que amo de vos, pero creo que con los vagas pensamientos que logro escribir podés empezar a darte una idea de todo lo que pasa por mi cabeza. Porque cuando digo que pienso en vos desde que me despierto hasta que me duermo, no solo pienso en tu existencia, pienso en esas cosas concretas que me hacen latir más rápido el corazón cada vez que las recuerdo. Agradezco todos los días porque las taquicardias no sean de ansiedad la mayoría de las veces, sino que son esas lindas alteraciones arrítmicas que me produce el hecho de estar enamorado.\n\nLa reciprocidad me entusiasma tanto. Perdón por todas las veces que te sentís exigida o que sientas que minimizo tus sentimientos hacia mí. No es porque vos no sepas demostrarlo, son inseguridades de muchos años que eligen salir a la superficie, pero poco a poco las estás haciendo desaparecer. No hay día en el que no demuestres lo mucho que me amás, y lo mucho que amás que yo te ame. No tengo dudas de que si decidís no blanquear una relación conmigo es porque querés cuidarme y porque querés cuidar a la que vos también creés que va a ser la relación de tu vida. Ese hecho no quita el acto de entender que nuestros corazones laten igual, que nuestros cerebros piensan parecido.\n\nY esto lo está escribiendo mi corazón, pero sin perder ese toque racional que caracteriza mi forma de ser. El entusiasmo por vos es tal que mientras escribo y recuerdo todo lo que estoy plasmando en este texto, se me aceleran los latidos. Y eso es impresionante, porque ni siquiera estoy a tu lado en este momento, ni siquiera estoy hablando con vos por llamada, ni siquiera estoy recibiendo mensajes tuyos. El simple hecho de ser consciente de tu existencia me hace bien, me saca sonrisas que solo la pantalla está viendo.\n\nNo voy a negar que te extraño todo el tiempo. Me da un poco de miedo decirlo, porque tengo la inseguridad de que creas que dependo de vos, pero me es inevitable extrañarte. Te extraño incluso cuando estoy en una situación alegre o rodeado de la gente que amo. Pero no es que me deprime no estar con vos, es que estoy almorzando con mi familia y pienso “qué bueno estaría que Mía esté acá conmigo”. No hay momento del día en el que no piense en estar con vos, siento que las tristezas al lado tuyo serían más amenas y que las alegrías serían más disfrutables. Vos le das ese toque extra que necesitan todos los momentos para volverse más felices. Y no es una idealización, vos sos la que me demuestra que mis sensaciones son completamente reales, porque las compruebo cada vez que vivo esas situaciones.",
  "Toda mi vida di por hecho que no había mejor plan para navidad que comer la comida de mi abuela, que es una excelente cocinera y hace mil cosas para el 25 de diciembre. Nunca creí que habría una mejor opción de degustar ese vitel toné que tan bien le sale, el matambre relleno o lomo con salsa. Pensé que no iba a encontrar algo que me llene más que comer esa ensalada rusa o destapar ese champagne en familia. Pero nuevamente me rompiste todos los esquemas. Desde que tiraste la idea, no hay día en que no piense que necesito pasar la noche de navidad en nuestro banquito, en el Barrio Parque Jorge Newbery, comiéndonos la humilde muzzarella de Nico Pizza. Qué linda coincidencia que esa sea nuestra pizzería de confianza mientras planeamos tener un hijo que se llame Nicolás Erreguerena.\n\nTambién te he visto llorar, y cómo me duele verte así. Si tenés una sonrisa tan linda que podría enamorar a cualquier persona que la mire, si te hace brillar la cara de una manera en la que cualquiera podría ponerse contento de solo observarte. Qué dolor verte así, y es muy triste que estés acostumbrada a eso, que te hayan hecho creer que es normal el hecho de llorar sin parar, el hecho de que la tristeza sea algo cotidiano, sin ofrecer ningún tipo de contención. Ahora llegué a tu vida y te prometo que no voy a permitir que eso sea una cotidianeidad para vos. Pero no me refiero a que dejes de llorar como un método para descargar tristezas, yo te voy a ayudar a que la tristeza se vaya alejando de tu día a día, tal como vos lograste hacerlo conmigo. No estás sola, y nunca vas a volver a estarlo. Voy a dar todo de mí para contenerte, consentirte y alegrarte cada vez que un pensamiento negativo salga de tu mente, o cada vez que optes por contármelo.\n\nAl contrario, qué lindo que es reirme con vos. Ahora mismo lo estoy haciendo y qué lindo que es. Creo que es un momento perfecto para definir cómo me siento. La complicidad y dinámica creo que es lo más increíble, porque con muchos me puedo reír pero con ninguno lo hago tan fácil como con vos. Mirarnos por Discord y entender los gestos, entender a qué nos referimos, qué lindo que es todo eso. Me fascina el nivel de conexión, sincronía, entendimiento, sintonía, afinidad, química, unión, conjunción, magnetismo, resonancia, coincidencia, alineación, compatibilidad, telepatía. Es una unión silenciosa, porque ni siquiera necesitamos hablarnos o escribirnos para entender lo que cada uno le quiere comunicar al otro. Y qué bien que me hace, qué cómo me modifica el estado de ánimo, porque después de las risas con vos, el día se afronta mucho más fácil, los pensamientos negativos se esfuman al menos por un rato. Sos la alegría de mis días porque nadie logra hacerme sonreír y reír tanto como vos.\n\nAmo cómo te amo, y razoná lo raro que es que yo diga esto. ¿Iñaki Erreguerena diciendo que le gusta cómo hace algo? Sí. Es exactamente eso, estoy orgulloso de la manera en la que te amo, porque encontré algo en lo que me gusta esforzarme por mejorar todos los días. Porque sí, a lo largo de mi vida me esforcé muchísimo en estudiar, en trabajar pero qué gratificante es amar. Qué lindo es despertar con el objetivo diario de hacerte sentir bien antes de ir a dormir. Amo la forma en la que te amo, y la forma en la que busco hasta el mínimo detalle para demostrarlo. Es recurrente el pensamiento de hacer cosas por vos, de que te sientas amada, de que sientas que merecés ser amada. Y sí, claro que lo merecés. Vos tenés esa mala costumbre de tirarte abajo pero quiero que te aferres a ese pedacito muy adentro de tu mente que sabe que merecés todo lo lindo de este mundo. Sos capaz de escuchar problemas ajenos por horas, de meterte en discusiones ajenas para que los demás se tranquilicen, de hacer reír a los que ves llorando, de acompañar a los que crean que ya no hay compañía que valga. Sos un ser único, distinto, especial, que se moviliza por el bien ajeno. Porque no sos egoísta, y jamás lo fuiste, porque te conozco hace poco pero vos me permitiste ver y deducir cosas muy profundas de tu cerebro.",
  "Decís que no te conozco, que solo veo lo que querés mostrarme. Pero te miro y te leo más allá de las palabras, en el temblor de tus piernas, en la respiración que se acelera sin razón aparente, en ese silencio que a veces pesa más que un grito. Ahí noto a esa chica sufrida a la que le implantaron en la cabeza que ella era la culpable de sentirse así. Y no es así, no es culpa tuya. No exagerás las cosas, no son teatrera. Pecás de humanidad, de sufrir lo que tiene que ser sufrido y de no fingir demencia ante las cosas que te hacen mal. Si el resto de personas del mundo eligen creer que la forma más sana de existir es haciendo caso omiso a las cosas que están mal, no te tenés que sentir mal por ser distinta a ellos. Vos sos distinta, vos sos la que hace las cosas bien. Y obviamente que eso sobrelleva tristezas, decepciones y ansiedad. Esa mente ya se va a relajar, porque juntos vamos a trabajar para que logres hacerlo, porque merecés sentirte bien. Pero empecemos por lo simple, por no cargar en vos la culpa de algo que no manejás, no es tu culpa sentirte así, es una reacción natural ante cosas que te hacen mal. No se va a curar de un día al otro, pero ahí voy a estar para recordarte que las cosas van a estar bien cada vez que lo necesites.\n\nComo bien dijo Nerea, vine para abrirte los ojos. Llegué a tu vida con el objetivo de demostrarte que hay cosas que estaban mal, que no tenías que quedarte cómoda en una situación incómoda. Porque tu corazón habló por tu boca cuando me dijiste que nunca querías llegar a un punto de estar en una relación por costumbre. Y pese a que me hace pelota verte mal por toda esa situación que te toca vivir, me alegra saber que decidiste ser feliz, que optaste por tener una vida propia.\n\nMe llena el alma que hayas elegido empezar de nuevo, no conmigo, sino con vos misma. Porque después de muchos años hiciste lo que parecía imposible: te elegiste. Tu decisión no fue un impulso, no fue una calentura; fue un acto de valentía, un rebobinar de la última media década para pensar “esto no me hace bien”. Ojalá tengas siempre presente lo valiente que sos, porque es muy difícil elegirse a uno mismo cuando el corazón intenta convencerte de que las cosas están bien, aunque el cerebro sepa que no.\n\nY juntos vamos a construir algo nuevo, algo que no va a doler, algo que vas a disfrutar. Y en el preciso momento en el que necesites dar un paso al costado porque ya no encontrás soluciones para que la relación funcione, no voy a oponerme; voy a acompañar tu decisión porque eso es lo que tenés que hacer, seguir eligiéndote. Si nuestra relación dura días, semanas, meses, años o décadas, la prioridad siempre va a ser esa, que no te vuelvas a perder a vos misma.\n\nEmpieza lo más lindo para los dos. Porque sí, estoy convencido de que esto nos va a hacer bien a los dos. Vamos a aprender a vivir sin miedo a perder, porque mutuamente nos damos la confianza de saber que siempre vamos a estar para el otro, vamos a aprender a amar sin sentir culpa, a disfrutar sin pensar en el final. Esta nueva etapa amorosa no va a ser un reemplazo ni una revancha para vos, sino más bien como una nueva experiencia, una nueva forma de amar, una relación donde los dos quieren aprender a valorarse internamente para entregarle el amor más puro al prójimo. No soy un premio a tu decisión, sino una consecuencia secundaria de haberte elegido a vos misma.",
  "Ahora, cada día va a tener un descubrimiento nuevo, un nuevo sentimiento al sonreír, un nuevo concepto amoroso aprendido. Hoy salgo de mi casa y miro al cielo con otro color, como hace años no lo hacía. Siento que el viento me refresca más, que comer algo dulce se siente más dulce y que la música suena más linda. Volví a sentir, en el sentido literal de la palabra. Todo se estaba apagando pero vos me diste razones para darme cuenta que no tiene por qué ser así. Y si en una hora decidís alejarte de mí por cualquier motivo, me llevo miles de aprendizajes que me diste en estos meses, porque me estás enseñando a pensar en positivo, a disfrutar de lo lindo de la vida. No hay día en el que no sienta una profunda gratitud por todo lo que hacés por mí.\n\nA veces apoyo la cabeza en la almohada y mientras me regalás tus últimas palabras del día, empiezo a pensar en mis planes a futuro con vos. Estás en tu derecho de tildarme de apresurado, de cebado o de flashero, pero eso es lo que me gusta hacer. Esa es mi manera de soñar despierto. Nos veo jugando al Carrera de Mente en la mesa familiar, con nuestros hijos chiquitos. También nos veo unos años después, cuando ellos se empiecen a cansar de nosotros y vos seas mi única compañera de juego. ¿Cambiaremos por el Burako? Seremos como tus papás. A lo largo de los años que faltan para eso, vas a enseñarme a mejorar en el truco pero me vas a ganar muchísimo más, porque vas a aprender a leer mis gestos de manera tal en la que siempre sepas cuando miento. Me es imposible mentirte, me es imposible ocultarte información. Soy muy transparente y quizás solamente oculto algunas de mis tristezas por miedo a cargarte de información negativa.\n\nMe pongo como objetivo que cada vez que llores de ahora en más sea por emoción, como te pasó la primera vez que leíste esto. Que quiera verte feliz siempre no significa que no vaya a acompañarte cuando estés triste, porque voy a estar para vos absolutamente siempre. Me querés asustar con que tenés una personalidad complicada, entonces permitime que te asuste con que no te vas a librar de mi amor con ningún cambio de humor o día difícil.\n\nTe admiro, estoy orgulloso de lo valiente que sos y del empeño que le ponés a todo. Me encanta que disfrutes de lo que hacés, que hayas conseguido la carrera de tus sueños, que logres ponerle todas las ganas del mundo y ser feliz con eso. Voy a acompañarte no solo hasta el día que logres recibirte, sino que te voy a estar a tu lado cuando busques trabajo, voy a estar ahí para levantarte en cada frustración. Nos quedan muchos Garridos, Gerardos y Chimuris por atravesar juntos, porque la vida es así de forra. En la vida nos vamos a cruzar muchas personas con ganas de hacernos sentir mal, con el afán de arruinarnos el ánimo, pero ahí voy a estar siempre. Y si me tengo que tirar al piso a calmarte para no aparecer en cámara, lo voy a hacer todas las veces que sea necesario.\n\nA veces la vida me pega fuerte. Estoy mejorando internamente pero cuando las cosas se complican, cuando las situaciones complejas me hacen colapsar, la muerte vuelve a aparecer como opción. Realmente no sé cómo manejar esos pensamientos catastróficos, y eso que mi terapia trata ese tema desde hace meses, y eso que estoy medicado, pero hay veces que me desbordo y esa parece la salida más fácil. Pero ahora estás vos, que me calmás y me hacés reír, que me agarrás en esos momentos de vulnerabilidad y me hacés entender que se puede mejorar, que no todo está perdido. Porque sos la única que se preocupa por eso, la única que sabe cómo tratarme en esos momentos. Y por eso repito, la coincidencia más linda es que hayas llegado en este momento de mi vida, cuando creí que no había salida ante estos pensamientos que me destrozan internamente. Sos mi respiro, mi momento de calma, mi distracción, mi sanación, sabés hacer todo tan bien para que los momentos difíciles sean más amenos.",
  "Tengo mucho miedo de perderte, y aún así me animo sin miedo a darte todo el espacio del mundo, porque me das esa confianza necesaria para creer en tu amor. Pero igualmente, tengo muchísimo miedo de perderte. No sé qué tan sano sea vivir con ese miedo ahí, latiendo en mi pecho. Pero me lleva a pensar y repensar antes de actuar, antes de hablar. Perdón por todas esas veces en que los impulsos actuaron, esas veces en las que las inseguridades se hicieron dueñas de mi voz y dijeron cosas que no debo decir; más bien, cosas que no debo pensar. A veces se me pasan por la mente pensamientos horribles, porque el miedo al abandono está siempre presente en mi persona. Pero quedate tranquila porque no es solo con vos, tengo miedo al abandono con cada una de las relaciones sociales que tengo y, si me preocupa más perderte a vos, es por todas estas cosas que lográs generar en mí.\n\nAun así, el día que tengas que dar un paso al costado, como ya lo dije hace unos párrafos, voy a estar convencido de que esa es la mejor decisión. Ojalá nunca vuelvas a sentirte atada a otra persona, ojalá nunca te sientas atada a mí. Sos libre, sos tu propia dueña, te tenés que quedar con eso en mente. Sos la guionista, productora y directora de tu propia vida. Si te enojás con Cris Morena por no darle el final que te gustaría a Margarita, hacé todo lo posible para no enojarte con Mía Rodríguez por el final que le va a dar a su propia vida. Tenés que elegirte siempre, siempre a vos, siempre tenés que pensar en lo que realmente te hace bien. Y no vas a estar sola, porque te voy a acompañar en cada decisión. Tu felicidad es la mía, porque la mía es la tuya. Esto es y siempre va a ser recíproco, en todos los sentidos.\n\nMuy poco tiempo antes de empezar a hablar con vos, o incluso cuando ya te conocía, abrí las notas de mi celular y expresé mis sentimientos en tres oraciones muy cortas que todavía tengo guardadas: “No sé sentir. No sé amar sin depender. No sé querer sin lastimar”. Hoy veo todo con otros ojos, y no porque me quiera convencer de que es así, sino porque lo estoy experimentando. Porque ya quedó demostrado a lo largo de estos párrafos que sí sentir. Porque no dependo de vos para vivir, porque lo que vos hagas con tu vida personal no influye en nada en mi estado de ánimo, cuando sí me pasaba eso con muchas otras personas. Porque vos me estás guiando a esto, me estás enseñando a amar. Porque no me estoy lastimando a mí mismo al amarte, porque no te estoy lastimando a vos amándote. Esto es sano, y es muy sano, porque los dos nos damos el tiempo y espacio que necesitamos. En el preciso momento en el que te diste cuenta que estabas empezando a tener un apego ansioso conmigo, pusiste un freno de mano y lograste salir adelante de eso. Juntos vamos a forjar la relación más sana de todas, donde salgamos ganando en absolutamente todo. Nos va a llevar tiempo, porque en el medio tenemos que sanar muchas cosas, pero qué lindo que va a ser. Ese es uno de mis planes más grandes con vos, y sé que se va a cumplir. Somos sanos y vamos a serlo siempre.\n\nSé sentir. Sé amar sin depender. Sé querer sin lastimar.",
  "Elijo pensar un poco a futuro, posicionarme en ese punto espacio-temporal en el que mire hacia atrás y recuerde con amor toda esta etapa. Cómo estoy disfrutando el conocerte, que me dejes conocerte. Y sé que hay muchas cosas difíciles en este camino, sé muy bien que tuve que resignarme a muchas convicciones para amarte, pero estoy seguro de que va a valer la pena. Ansío el día en el que este pasado, que hoy es presente, sea la base del futuro más amoroso que podría proyectar a tu lado. Porque claro, estamos forjando los cimientos de un amor, los dos tenemos claro que este recién es el inicio, que quedan muchas cosas por vivir, pero estamos demostrándonos todos los días que hay un futuro juntos.\n\nY a mí me sigue tocando atravesar la situación más difícil de mi vida. Y no, no perdí a nadie en especial, no perdí nada en especial, pero sí me perdí a mí mismo. Me está costando muchísimo encontrarme en este momento, pero vos estás ahí para ser mi brújula y mi mapa. Siempre estás para hacerme sentir bien en los peores momentos. Cuando no me importa absolutamente nada, vos me hacés dar cuenta de todos los motivos que me quedan para seguir peleando. Y sí, vos sos uno de ellos, porque no quiero dejar de vivir cada risa, cada juntada, cada charla, cada alegría que me das. Lográs hacer todo lo que necesito para bajar a tierra, para hacerme notar todo lo que me queda. Estoy agradecido eternamente por la manera en la que te preocupás por mí, porque dejás absolutamente todo de vos para que yo deje de estar así. Hacés cosas hermosas y ofrecés locuras que claramente no voy a aceptar, pero el simple hecho de ofrecerlas ya me hace sentir bien, porque me hace ser consciente de que hay una persona que quiere que salga de esta situación. No estoy solo, y lo noto cada vez que interactúo con vos.\n\nMe encanta convivir con vos, experimentar momentos cotidianos con tu presencia. Masticar la comida, mirar para mi costado y que estés tus ojos brillosos ahí, iluminando el almuerzo. La vida me sonríe cada vez que estoy a tu lado, sos el método más eficaz para callar mi mente cuando lo único que quiero es desaparecer. Todo me parece tan irreal que no me puedo sacar de la cabeza la idea de que todo esté siendo un sueño, de que alguno de los pellizcos me va a levantar de esta fantasía.\n\nTengo la suerte de haber dormido con vos. Aprecié el placer de sentir que ese corazón lata a un ritmo más lento con el correr de los minutos, encontrando la calma y conciliando el sueño mientras te recostás en mi pecho. Me he quedado mucho tiempo apreciando el ritmo de tu respiración, intentando imitarlo y coordinarnos, analizando cómo funciona ese cuerpo, para ver si puedo emular alguno de tus actos y parecerme un poco más a vos. Igualmente está claro que respirar más corto y acelerado no va a ser suficiente para convertirme en el ser bondadoso, gracioso e inteligente que sos vos. Y repito, no dejo de creer que es un sueño. ¿Qué sentido tiene que una persona envase todo lo que me gusta? ¿Cómo puede ser real que una persona esté dispuesta a hacerme feliz con cada acto?\n\nTe vi interactuar con mi familia y me enamoré aun más. Qué manera tan natural de fluir en cada conversación, de responder con entusiasmo a personas que no conocés, encontrando complicidad en ellas. Esta es tu nueva familia política, o pronto lo será; cuando vos quieras, lo será. Gracias por cada risa que le regalás a las personas que amo. Esta familia está golpeada, y vos lograste sacarles una sonrisa a mis abuelos, a mis tíos, a mi primo, e hiciste tentar de risa a mi mamá más de una vez.",
  "Y vuelvo al principio: qué locura es el tiempo. Amo ir al gimnasio; he llegado a pasar seis horas ahí, sintiendo el peso de cada minuto. He hecho viajes de doce horas en los que el reloj parecía haberse detenido de lo lento que avanzaba. Y esas cinco horas en el colegio eran eternas. Pero con vos todo cambia: una hora a tu lado dura menos que una serie de sentadillas, una llamada de quince horas se esfuma más rápido que una caminata de tres cuadras, y un mes entero con vos pasa en un suspiro, como una clase de media hora.\n\nTe imaginé siendo la madre de mis hijos e, inevitablemente, me agarro de cada accionar para ponerte en esa posición. Te veo cuidándolos como a tus gatos. Te visualizo preocupándote por ellos como cuando Zorkito se fue al terreno del fondo en San Vicente. Te veo cantándoles canciones de cuna como cuando lo hacés en nuestras llamadas. Te veo entregándoles tu corazón tal como lo hacés conmigo.\n\nSi hay algo que aprendí de vos es que sanar no es borrar heridas, sino aprender a vivir con ellas y lograr que duelan menos. Vos me enseñaste que la tristeza puede coexistir con la alegría, que uno puede tener días malos y aún estar contento, que un tropezón no es caída. Vos sos la que me hace tener un objetivo muy realista, haciéndome entender que no se puede estar 100% feliz pero que sí se puede tener más momentos buenos que más momentos malos, o que la meta tiene que estar en cambiar el foco para darle más valor a las cosas positivas. Y no sos mágica, no sos una salvadora, sos mi compañera en todo este proceso, sos esa persona que está ahí para escuchar sin interrumpir, para abrazar sin juzgar, para mirarme llorar cuando ni yo mismo me quiero mirar. Vos sos mi sostén y te juro que yo voy a ser el tuyo.\n\nA veces creo que esta relación no tiene explicación racional, me inclino a creer que el universo optó por cruzarnos cuando los dos nos necesitábamos. Te pude abrir los ojos, pudiste callar mi mente. Esta conexión mística me fascina, le agrega un plus hermoso a una relación hermosa. Nos podríamos haber cruzado miles de veces, incluso haber empezado a hablar hace un año cuando compartíamos el grupo de Minecraft, o hace unos meses cuando empezamos a estar juntos en el grupo de One Direction. Pero todo se dio para que nuestra relación se afiance en septiembre, nuestro mes. Es tan lógico que nos hayamos unido tanto pero tan extraño haber podido cruzarnos entre tantas personas. El mundo insistió e insistió en cruzarnos en los mismos grupos sociales hasta que se nos dio, en el momento justo.\n\nAntes de seguir quiero revolver mi propia historia. Hace muchos años, mi tatarabuelo Luis Enrique Carrera, quien me heredó el don de la escritura a través de las generaciones, le dedicó un hermoso texto a Zunilda Fábegra, mi tatarabuela. Quiero aprovechar para dedicarte sus estrofas:\n\nEn el ambiente estaban plasmadas sus palabras: yo las percibía con todos mis sentidos: las veía, las palpaba. Penetraban en mí por mis oídos, por mi boca, por mis ojos y por mis poros. Me besaban con el aire. Eran la idea hecha materia y musicalizada por su acento. Su acento, fresca enramada de armonía, para el ardor estival de su espíritu. Yo escuchaba la música de sus palabras, bebía de sus ideas, comía sus ideas y me nutría de su alma.",
  "“Siempre juzgué que no era de este mundo”, concluyó mi antepasado en su poema. Y ahí fluyó el amor, uno de los tantos amores que fueron necesarios para que yo esté presente en este mundo. Y hoy, a más de un siglo de ser escrito, me heredó ese texto donde plasma los mismos sentimientos que yo tengo con vos.\n\nMis días cambiaron. Me despierto y en lo primero que pienso es en desearte un buen día, y espero con ansias tu primer mensaje de la mañana mientras recuerdo momentos lindos a tu lado. En el gimnasio me amigué con los días de jalones, porque quiero fortalecer esa espalda y esos bíceps que tanto te gustan. Me esfuerzo en tener las cuatro comidas diarias porque tengo que estar saludable, tengo que hablar con el ejemplo y ayudarte a que dejes atrás esos malos hábitos alimenticios. Todos los días hablo sobre vos con mi mamá y le actualizo a mis amigos cómo viene nuestra relación. Mientras desayuno, almuerzo, meriendo y ceno me imagino que estás en la silla de al lado, busco esa complicidad que nos caracteriza, anhelo trenzar nuestras piernas. Al abrir la persiana y ver cómo está el día, me urge hablar con vos sobre eso, mencionarte si hace calor o frío para que sepas cómo afrontarlo si es que todavía no te levantaste. Me voy a dormir y lo último que hago es hablar con vos, ya sea por llamada o por chat, pero siempre es hablar con vos y eso me llena el alma.\n\nAprecio la reciprocidad que tenemos. Estamos comprometidos a sanar las heridas del otro pero también mostramos nuestra vulnerabilidades buscando apoyo. No tenemos miedo a hablarnos, a contarnos lo que nos duele. Porque los dos nos queremos ver sonreír mutuamente y ayudarnos a encontrar un camino a través de la oscuridad. Dejé de fingir que estoy bien, porque hablando o solo gesticulando, vos ya sabés lo que me está pasando por la cabeza, sos la única que nota mi malestar sin siquiera escuchar una palabra saliendo de mi boca, incluso si me estoy riendo. Nos conocemos y nos vamos a seguir conociendo día a día. Y si te muestro mis traumas, si abro mi corazón y mi mente, es porque yo también quiero verme bien; y si quiero verme bien es porque vos me convenciste de seguir luchando.\n\nY yo quiero ser todo esto para vos. Voy a ser tu escudo cuando la vida intente golpearte, voy a ser tu refugio cuando el mundo te dé miedo, voy a ser tu calma cuando sientas que todo está acelerado alrededor. Pero también quiero ser la persona que te haga revolotear las mariposas en la panza, quiero ser ese que haga que las agujas del reloj se muevan más rápido, el que te haga sentir que un viento frío te relaja más y que un pastel de papa puede ser más rico si te reís mientras lo comés. Deseo que sea así por siempre, quiero que sean años y décadas de seguir descubriéndonos, de seguir aprendiendo a amarnos y de disfrutar cada momento juntos.\n\nSonrío al aire cuando me acuerdo de vos. Hay veces que solo mi pared es el único testigo de esas sonrisas. Se me aceleran los latidos y solamente lo sienten las sábanas que cubren mi pecho al moverse con una velocidad distinta por mi ritmo cardíaco. Hay risas de las que solo son captadas por la pantalla de mi celular y hay lágrimas de emoción que solo fueron percibidas por mi almohada. Tu existencia me alegra incluso cuando no hablo con vos, y eso es puro mérito de la felicidad que me transmitís en tu forma de tratarme.",
  "De vos aprendí que permanencia no es lo mismo que presencia, que los años no tienen por qué impactar severamente en la naturaleza de una relación. En cuestión de días te volviste mi daily chat, en cuestión de semanas mi alma gemela y en menos de dos meses me hiciste convencer de que sos la mujer que quiero de compañera el resto de mi vida. Lograste tocarme el alma muy rápidamente. Porque sí, no lo hiciste físicamente, pero me tocaste el corazón con acciones y palabras. Fuiste como un electroshock, activaste algo que se destinaba a una pausa indeterminada. Me ayudaste a volver a sentir, incluso cuando estaba convencido de que eso nunca iba a pasar.\n\nTambién entendí que el silencio puede ser una forma muy pura de comunicación. Porque cuando vi tus piernas temblar mientras veíamos Smile, me di cuenta lo que pasaba por tu mente sin que digas una palabra. Porque cuando te tranquilice en ese momento, notaste todo el amor que tengo adentro sin que salga ni una sola palabra de mi boca. Porque cada vez que nos fundimos en un abrazo nos damos la tranquilidad y contención que otras personas no pueden lograr con frases motivadoras. Nos entendemos, vivimos situaciones similares y sabemos lo lindo que es tenernos mutuamente.\n\nY estás siempre acá conmigo. Cuando me rasco el bíceps, te veo ahí apretándomelo. Me encontré a mí mismo repitiendo sin parar frases que vos me pegaste, y eso que ‘ni a punta de pistola’ pensé que iba a pasarme algo así. Me paro a pensar y no puedo creer que One Direction y Emilia sean de mis artistas más escuchados del mes pasado, y eso que no cuenta las jams, los escucho por mi cuenta. No me asusta perder mi personalidad, porque sigo siendo yo, pero me maravilla aprender que el amor también es interiorizarse en un lenguaje ajeno, que hasta hace muy poco me era desconocido. Me encanta tu mundo.\n\nTambién aprendí que el amor no tiene que ser intenso para ser real. Porque hay juntadas en las que nos limitamos a ser parte del grupo de amigos sin hablarnos de manera linda. Podemos ser más o menos románticos por chat y, aun así, seguir amándonos con todo nuestro corazón. Podemos boludearnos mutuamente y no nos lastimamos porque compartimos el humor. Podemos hablar de nuestros intereses, nuestras preocupaciones y nuestras vidas, sin centrar todo en el amor que nos tenemos.\n\nY la nostalgia del presente, como la describe Borges en uno de mis poemas favoritos, es algo que me fascina. No puedo dejar de pensar en el día que mire para atrás y recuerde toda esta etapa con alegría. Que me acuerde del primer “te amo”, del primer beso o de la primera vez que dormimos juntos e inevitablemente se me piante una lágrima.\n\nTe agradezco por hacerme abrazar mi vulnerabilidad. Siempre vi como un defecto mi sensibilidad, mi sentimentalismo. Creía que eso me jugaba en contra para formar vínculos sociales y me dolía pensar que nunca iba a poder abrirme realmente con nadie como lo hago por vos. Sos la primera persona que me vio llorar en mucho tiempo, porque hasta eso me avergonzaba. Me ayudaste a encontrarme a mí mismo al aceptar esa fragilidad como una virtud de mi persona. Lo más fácil sería fingir demencia, despreocuparme por todo, pero elijo estar pendiente de las cosas que están mal, buscar soluciones y dejar que los dolores me afecten, canalizarlos como me sea más sano.",
  "Cuando pienso en nosotros no me sale pedirle nada más al universo. Quiero seguir viviendo, quiero seguir disfrutando incluso sin apresurarme por saber el final. Todo lo nuestro fluye de una manera tal que no necesito tener certezas sobre el futuro para poder disfrutar el presente y abrazar el pasado. Las sonrisas que se me escapan me hacen dar cuenta que estoy justo donde quiero, deseo y necesito estar.\n\nTe empecé a ver en todos lados, y no creo que sea forzado, sino que mi cerebro empezó a vibrar con tu misma sintonía. Porque empecé a ver el 6 y el 9 por todas partes, porque cada vez que voy a Ezeiza miro de lejos tu barrio. Porque hay canciones que antes solo eran ruido y ahora tienen esa dulces melodías que me recuerdan a tu nombre, a tu cara, al abstracto concepto de tu existencia.\n\nDescubrí que los vínculos no se tratan de lo que yo creía. Me acostumbré a que conocer a las personas fuera literalmente eso, ahondar en la vida y personalidad de los demás. Pero vos, además de abrir las puertas de tu mundo, me enseñaste a conocerme a mí. Conocí matices míos que pensé que nunca iban a ser revelados. Estoy aprendiendo a quererme, a ser paciente conmigo mismo, a no culparme. Y creo que todo nace de un espejismo, de ver que vos necesitabas eso mismo y no podías ver en vos todas las cosas que yo aprecio. Entiendo que al mirar al otro, nos vemos a nosotros mismos, con dolores reflejados y traumas compartidos. Y finalmente, nuestra empatía nos está abriendo los ojos para darnos cuenta de que nos tenemos que amigar con nosotros mismos. Porque cuando te doy un consejo, también me lo doy a mí mismo. Y, aunque lo más fácil es fingir demencia y hacer de cuenta que solo te hablo a vos, elijo tomar mi propia recomendación y ayudarme a mejorar. Y yo sé que vos hacés lo mismo, porque veo una mejoría en vos, porque pude ver cómo te elegiste después de tanto tiempo siendo la sombra de una relación que te quitó tanto de tu bienestar, de tu autoestima.\n\nY hay días en los que no escribo este texto, días en los que dejo de analizar lo que siento. Porque también un poco se trata de eso, de disfrutar el momento sin sobreanalizar, pero cómo me gusta plasmar acá todo lo que siento por vos, porque son tantas cosas que me dolería que solamente queden en mi cabeza. Y si se me pasa por la cabeza la idea de simplemente disfrutar del amor, teniendo en cuenta mi personalidad racionalista, es porque vos me estás enseñando a callar mi mente y disfrutar los momentos lindos. Esa paz de que el amor venga sin instrucciones es nueva para mí.\n\nSuelo pensar en que expreso todo lo que siento, y no es que tenga miedo de decirte lo que pasa en mi corazón, sino que no sé cómo traducir en palabras esa sensación que tengo al verte, ese sentimiento que me genera hablar con vos, esa emoción que me genera escucharte reír o esa ternura que me da escucharte hablar de las cosas que te gustan. Creo que con actos lo trato de demostrar, trato de meter siempre un chiste para poder escuchar esa risa que tanto me genera, te incito a hablar de tus intereses. Sí, me muero de ganas de escuchar todos los álbumes de One Direction y puntuar cada canción como hicimos con mp3 de Emilia. Nunca dejes de mostrar lo que amás, nunca dejes de mostrar lo que sos, porque amo conocerte. Siempre tengo ganas de verte, siempre quiero hablar con vos. Eso no sirve para expresar lo que siento, pero te puede guiar al entender que me muero de ganas de sentir esas sensaciones que siento al verte y hablarte, al oírte reír o al simple hecho de escuchar tu respiración.",
  "Vos brillaste entre todos. Desde que conozco tu nombre que me interesaste. Entre tanto gris, vos fuiste ese aura rosa que se destaca entre la multitud. Y yo elegí quedarme con ese rosa, porque tuve la sabia decisión de hacerle caso a ese ojo interno que me hizo ver el mundo con colores y notar ese tono distinto en tu existir. Desde que te conocí, noto aún más el contraste, veo más ese brillo, distingo más esa forma.\n\nMe gusta que podamos ser felices sin mostrarnos, que si hay que fingir que no estamos enamoradísimos frente a tu familia lo podamos hacer sin problema. Estoy esperando con ansias el día en el que te pueda presumir en todas mis redes sociales, pero amo que no sea necesaria la grandilocuencia para poder disfrutar del amor más puro que jamás sentí. La magia no está en que los demás sepan, no está en tratar de convencer a los demás que lo nuestro es sano y real, sino en atravesar toda esta situación amándonos mutuamente sin importar la opinión ajena.\n\nY cuando llega la hora de dormir, cuando mi mente al fin logra conciliar la calma, cuando la ansiedad baja, cuando me quedo solo con mi mente, me duermo en absoluta tranquilidad porque viví un día más de mi vida cuando antes creía que el final estaba muy cerca. La calma se esparce por todo mi cuerpo cuando logro apreciar todo el amor que logro sentir por vos, cuando hasta hace muy poco me negaba a amar. Si un día la naturaleza de estar relación cambia, si un día nos toca separar nuestros caminos, me voy a quedar con eso. Con cada noche de paz que puedo tener por haberme permitido ir contra mis convicciones, por haberme permitido vivir. Gracias por dejarme amarte, no te niegues nunca más a que lo haga.\n\nLe perdí el miedo a la distancia, al silencio, al paso de tiempo. Situaciones que antes me atemorizaban, como que me dejes de amar por no verme durante algunos días o que te olvides de mí por alargar mucho el inicio de nuestra relación, hoy ya no me preocupan. Generás confianza en mí para que esas creencias pesimistas se esfumen. Entendí que esto no se deshace con los kilómetros ni con las hojas de un calendario, que es real y va a hacerse fuerte frente a todas las adversidades.\n\nY estoy aprendiendo a amar. Como ya te dije, hace unos meses escribí que “no sé amar sin lastimar”. Hoy, es muy distinto. Aprendí a acompañar sin exigir, a cuidar sin retener, a sentir sin imponer dominación sobre tu vida. Esa libertad me encanta. Priorizo que los dos podamos hacer nuestras vidas y seguir siendo felices cuando estamos juntos. Y así quiero quedarme, muy tranquilo y complaciente mientras disfruto de la relación. En un mundo que teme al compromiso, incluyendo nuestras experiencias personales, estamos eligiendo el amor. Sé que no te querés enamorar, pero también sé que lo estás haciendo.\n\nTodos estos sentimientos valen más que cualquier promesa vaga. Toda esta experiencia justifica el hecho de haberlo intentado una vez más. Cada emoción le da sentido al hecho de haberme animado a enamorarme. Toda esta felicidad que está en mí legitima cada dolor del pasado.\n\nY no quiero decir que el amor está encapsulado en mí, porque no es así. Porque soy un frasco sin tapa, porque derrocho los sentimientos en cada palabra, en cada acto. Nunca voy a ser una pared, nunca vas a encontrar en mí un ser sin emociones que elige callar por miedo a empalagar, porque ahora me diste la confianza necesaria para demostrarte todos los días que todo lo que siento es real. No me voy a guardar nada.",
  "Cada plan a tu lado es perfecto. Me olvido lo que significa el aburrimiento cuando paso tiempo con vos. Cada vez que nos vemos nace un nuevo chiste interno. Y siempre me pasa lo mismo, siempre se me revuelve el estómago antes de verte. Siempre vuelvo a mi casa con una sonrisa en la cara. Siempre le digo a mi mamá que la pasé hermoso. Me encanta hacer cosas nuevas con vos, como haber dormido juntos o haber ido al gimnasio. No sé cómo explicarlo, pero me sonríe el corazón.\n\nUna de las cosas que más me definió a lo largo de mi vida fue mi ateísmo, el no creer en deidades, pero hoy te veo reflejada como una religión. Tengo fe ciega en vos, porque vos me transmitís esa confianza para creer en tu palabra. Sos mi devoción cada mañana. Todo lo que hacés y decís se convierte en algo sagrado para mí, todos los gestos y palabras que forman parte de tu personalidad son majestuosos en mi cerebro. Mi dogma es apreciarte. Mis diez mandamientos son no faltarte nunca, amarte, darte la mejor versión de mí, hacerte sentir bien, acompañarte, dejar que me ames, respetarte, agradecerte, elegirte y ser tuyo. Estoy dispuesto a transformar mi habitación en un culto a nuestro amor. Hablar con vos se siente igual de sanador que lo que un religioso percibe al entrar a una iglesia. Cada noche me voy a dormir pensando en la inconmensurable imagen que tengo de vos en mi mente. La relación entre nosotros va llenándose de rituales y costumbres. Y vos cumplís en mí ese rol sanador que otros buscan en la figura de Dios. Tu existencia es un milagro que tiró abajo mis convicciones de morir en el ateísmo.\n\nHay días en los que la oscuridad parece absorberme. Pensé que desaparecer era una opción viable; olvidarme de todo, empezar de cero. Cómo me equivoqué. En el preciso momento en el que fue concreta la posibilidad de internarme en una clínica psiquiátrica, me arrepentí de pensar eso. En ese preciso momento me di cuenta de lo que tengo, de todo eso que no logro valorar por la manera en la que me ciega la depresión que padezco. En ese preciso momento me di cuenta que no quiero alejarme de esos brazos que me tranquilizan en mis momentos más difíciles, entendí que no quiero dejar de tener cada una de esas charlas sanadoras que tenemos, que no tengo que perder la oportunidad de disfrutar cada momento a tu lado. Y aunque te moleste que lo haga, permitime disculparme una vez más, por cada una de esas veces que tuviste leer esos pensamientos. Hoy, estoy convencido de que quiero vivir años y años, todos a tu lado.\n\nY ese doloroso viernes novembrino, cuando todo se me desmoronó, cuando me ahogué en mis propias lágrimas y sentí el peso del llanto de mi mamá sobre mi hombro, cuando creí que la luz del final del túnel se estaba apagando, cuando cada respiración me costaba una parte de mi alma, estuviste ahí. Estuviste ahí para ayudarme a destacar cosas buenas de la situación más horrible que viví en mi vida. Como siempre, estuviste ahí. Porque si la incondicionalidad se ve reflejada en un ser humano, es en esa persona cuyo nombre de tres letras encapsula el más grande amor que una persona puede poseer para dar a sus pares.\n\nSos un ser sanador. Ya te lo dije, que mainees Yuumi no es casualidad. Porque curás y también me abrazas el alma como el escudo de Lulu. Porque podés ser N°19 de LAS con un campeón que supportea pero sos la N°1 en hacer feliz a Iñaki Erreguerena, y eso lo podrías agregar a tus logros personales.",
  "Tres letras, solamente tres letras eligieron tus papás para definir en una palabra a la mujer más hermosa que se haya gestado alguna vez. Tres letras. Mi Incondicional Acompañante. Mi Infinita Alegría, esa Mirada Intensa Atraviesa Mi Inmenso Abismo dentro de Mi Inestable Alma. Mixtas Intenciones Amorosas siento cuando Mi Inmensa Amada está cerca. Gracias por los Momentos Increíbles, Auténticos. Sos Mi Inspiración Absoluta para Mitigar Infiernos Adentro de mi cabeza. Por vos, Mantengo Ilusiones Activas de un Mejor Iñaki Aproximándose. Miro, Imagino, Abrazo la Maravillosa Idea Atesorable de un futuro a tu lado. En razón de tu compañía, logro Manejar Impulsos Atemorizantes de Matar Insensiblemente A lo que queda de mí. Gracias, MÍA.\n\nMe enseñás. Me acostumbré a aprender de vos, se convirtió en una cotidianeidad. Aprendí a no tenerle miedo a mi vulnerabilidad, aprendí que hay que arriesgarse por amor, aprendí que se puede salir hasta de las situaciones más oscuras, aprendí que el amor puede curar, aprendí que se puede recibir amor a pesar de estar roto por dentro. Me llenás de lecciones, porque son miles de cosas que aprendo mientras comparto mi vida con vos. Me enseñaste a ponerle un punto final a mis pensamientos negativos y dejar la sangría lista para escribir un futuro lleno de optimismo. Me sumás alegrías y me restás dolores, multiplicás mis ganas de existir y dividís tu corazón en partes para poder entregármelo en la mano. Gracias por darme clases intensivas de cómo ser una mejor persona, prometo que estoy tomando nota.\n\nAmo pensarte, amo hablarte, amo mostrarte. Mi día a día está lleno de conversaciones referenciadas a vos, ligadas a la mujer que me ayuda a ser feliz. Al mencionarte se me dibujan las sonrisas más inocentes que se le pueden dibujar a un veinteañero que se olvidó de cómo sonreír. Me fascina hablar sobre vos, pasar incontables minutos y horas hablando de vos con cada persona con la que interactúo. Me enorgullezco del vínculo sano que tenemos. Me alegro de tenerte en mi vida. Amo hacer que te amen, que mi mamá te vea como un ser angelical y que mis amigos apoyen la idea de que sos el amor de mi vida, de cada una de ellas.\n\nPorque sí. Dentro de mi racional y pseudocientífico cerebro, implantaste ideas místicas que pensé que nunca iban a aparecer. No hay fundamentos de que exista la reencarnación pero, por primera vez en mi vida, sentí la necesidad de creer en algo tan ascético para mi persona. Tocó dejar de lado a Einstein, olvidarme un rato de Newton, obviar las palabras que leí de mi amado Bill Bryson; elegí hacerle caso a mi intuición. Estoy convencido de que esos registros akáshicos fueron completamente verídicos, sé que es real me bajaste de esa soga, que superamos una traición juntos y que logramos hacernos fuertes en la absoluta pobreza. En base a la fe que deposité en esas palabras de Nerea, formé la convicción de que de ahora en más, después de haber concretado este lazo, vas a ser el amor del resto de mis vidas. Esto recién empieza; y no, no me refiero a que recién empieza en esta vida. Este amor recién empieza para el resto de nuestras vidas. Ese alcoholizado choque de labios en la fría noche de octubre fue el inicio de algo que perdurará en cada una de nuestras vidas. Y esta vez no será fugaz, porque nuestras almas se cruzaron tantas veces, se sanaron tantas veces, que llegaron a un elevado punto de fortaleza en su unión y compactación.",
  "Vuelvo en el tiempo. Vuelvo a esa chica que no pude conocer, a esa aún niña que no pude ayudar, que no pude contener. A esa que entraba en su adolescencia y sufría, sufría de esos horribles traumas que hoy ya no quiere ni pensar. Sufría de esa ansiedad horrible, que lamentablemente perdura. Vuelvo a ella para hablarle directamente. No pude comunicarme en su momento, pero a través de esto quiero conectar con esa parte de tu consciencia que mantiene viva a esa faceta de tu persona. Al serme imposible viajar en el tiempo para platicar con ella, me reduciré a dedicarte algunos versos que la pondrían contenta.\n\nY hoy voy a por más, y vos me hablás\n\nDecís que no querés perturbar mi paz\n\nNo te das cuenta las noches que me aliviás\n\nCon las cosas esas locas que vos me contás\n\nY no me pidas que no venga a decirte\n\n'Gracias por los días en los que no te fuiste'\n\nOkupa, Wos. 2019.\n\nYo que ya me había acostumbrado a la soledad\n\nY ahora llegas tú con tu dulce impertinencia\n\nTu loca extravagancia y tu fragancia, fresca novedad\n\nMazas y Catapultas, Kase.O. 2016.\n\nSos el paraje, mi aterrizaje\n\nSos un anclaje, mi comandante\n\nSos ese mundo mejor donde quiero vivir\n\nLo que más busco, Bersuit Vergarabat. 2018.\n\nNueve. Uno de tus números favoritos. Nueve letras tiene tu apellido. Nueve letras tiene Barrio Uno. Y fue la novena vez que nos vimos donde nació todo. Justo esa madrugada después de un nueve de octubre que todo lo delató. Nueve, el culminador del ciclo numérico tradicional. Eso que en numerología se traduce como darle un cierre a algo para darle la bienvenida a algo nuevo. Y qué tenue veía esa luz en la plaza de tu barrio, cuando solo podía concentrarme en tu boca y en tus besos como ese menú eventual. Me felicito por lograr que ese amor continúe verdaderamente después de esa noche.\n\nEl insomnio sabe matarme. Dos ansiolíticos y medio no logran calmarme. La vida parece cuesta arriba cada noche, los miedos y los traumas florecen cuando mi cabeza se apoya en la almohada. La soledad pesa el doble, la tristeza invade mi cabeza. Pero como dije, siempre estás vos. Me bajás tres cambios con dos palabras, me hacés respirar profundo cuando olvido cómo se hace. Sos mi pastilla para dormir. Tus palabras son mimos a distancia para poder relajarme. Presencialmente, es inefable la manera en la que mi corazón se calma. Espero con una mezcla de ansiedad y paciencia a que llegue el día en el que pueda dormir todos los días abrazado a vos, a que esas voces nocturnas ya no existan. Estás siendo parte fundamental de este tratamiento.\n\nYo creo que mi corazón se acostumbró a latir un porcentaje más rápido desde la primera vez que me dijiste “mi amor”; ese mismo corazón que pensé que latía más lento, tal como se lo dije a mi terapeuta en la primera sesión. Me acostumbré a que mi cabeza sobrepiense menos desde que me empezaste a recordar diariamente la forma en la que me amás. Cuando me voy a dormir y no puedo conciliar el sueño, pienso en vos. Me pongo a enumerar tus lunares, a pensar en las curvas de tu nariz o en el tamaño de tus manos. Sos mi calma, el punto de relajación después de los peores días. Yo no cuento ovejas, cuento aspectos que me enamoran de Mía Rodríguez. Gracias por ser el rebaño que abraza mi alma cuando la habitación está oscura y el cerebro opta por no apagarse. Gracias, mi ovejita hipnagógica.",
  "Y siento que aún te conozco tan poco, que tenés tanto por mostrarme pero no te animás a hacerlo. No serás juzgada nunca, me aterra creer que solamente estoy viendo la fachada de tu tristeza, que veo el frente de una casa con las persianas cerradas. Estoy tocando el timbre, estoy esperando a que me abras. Estoy listo para tirar a la basura todos los dolores que están desparramados por el suelo de esa casa. Estoy dispuesto a lavar todos los platos sucios, que vos no ensuciaste. Estoy listo para acomodar todos los libros que dejaste caer de esas estanterías. Dejame entrar, voy a seguir esperando en la puerta. Cuando estés lista, sacá la traba y abrila.\n\nY al mismo tiempo te conozco tanto que podría recordarte quién sos si te lo olvidás. Porque vos no me dejás conocerte, pero yo me exijo conocerte. Recuerdo todo lo que me contás, tengo una enciclopedia mental de tu persona, de tus dolores. Presto mucha atención a tus inseguridades, para saber dónde abrazarte más fuerte. Estoy listo para ayudarte a curarlas, porque sé que vos sos capaz de hacerlo, y ahí voy a estar para brindarte todo el apoyo, para darte un empujón siempre que necesites, para hacerte piecito cuando sientas que estás hundida en un pozo sin salida.\n\nAgradezco, tal como a vos te gusta agradecer. Agradezco que hayas elegido a la UPE y que hayas conocido a nuestros amigos. Agradezco haber elegido el San Ignacio y haber conocido a nuestros amigos. Me agradezco por haberme animado a ir al cumple de Moya aunque un día antes estaba convencido de no ir por la depresión. Agradezco a Nerea por leernos las cartas. Agradezco a Roblox, a los creadores de Dress To Impress. Agradezco a Hueso por ser un pelotudo. Agradezco y aborrezco a Joaquín por no saber amarte. Agradezco a Delfina Guillán por haberme dicho que me la juegue ese jueves octubrino. Te agradezco por haber aceptado que me sume a la juntada en la que empezamos a formar un vínculo, por invitarme a tu casa casi sin conocerme, por dar el primer paso para formar un vínculo, por quedarte a solas en llamada conmigo aunque ni nos conocíamos, por darme una oportunidad, por jugártela por mí. Agradezco a los Mac Garva por acercarme a tu mundo, a Tomás Ramírez por ser un tema de conversación, a Luisina Paolucci por cambiarse al Vicenta, a Micaela Rebollido y Bianca Pastorino por darnos motivos para comenzar a contarnos nuestros traumas, a Tomás González por shipearnos desde un primer momento. Agradezco al creador de Discord, al de Minecraft y a One Direction. Agradezco a mis viejos por haberme permitido nacer y a los tuyos por hacer lo propio. Agradezco que nos elijamos, que nos entendamos, que nos amemos.\n\nMe gusta escribir esto mientras escucho música que me hace feliz, porque también sos un reflejo de eso. Sos mi música favorita, o lo que siento mientras ingiero la comida que me gusta, sos ese aire fresco en la cara cuando la ansiedad me está matando, sos las risas con amigos, sos las noches de alcohol y las noches sin alcohol, sos un asado familiar y mis películas favoritas. En vos veo reflejadas todas las cosas que me hacen bien, porque tenés un poquito de todo lo que disfruto. Encuentro compactadas en vos todas las nimiedades que se distribuyen entre todas las cosas que me hacen bien en esta vida. Sos un cúmulo de detalles que causan mi felicidad.",
  "Empecé a verme en vos. Desde un primer momento me vi en vos. Vi mis traumas siendo atravesados por alguien más. Vi mi humor en otra persona. Entendí que no estoy solo, después de años sintiéndome aislado e incomprendido. Me veo en vos, y eso me ayuda a quererme. Noto que hay cosas mías que sí me gustan, cosas que aprecio, porque sé apreciarlas en vos. En vos está todo eso que me falta, pero también está todo eso que tengo y no sé valorar. Me abrís los ojos, me ayudás a quererme.\n\nVoy a hacerte feliz. Todas las mañanas de tu vida vas a amanecer con la consciencia tranquila de que hay una persona que te ama, que te quiere ver bien pase lo que pase. Voy a complacerte ahora, cuando seamos novios, cuando estemos casados. Siempre voy a dar la mejor versión de mí, porque no merecés menos que eso. En cada detalle intentaré demostrar el amor que llevo adentro. En cada palabra intentaré secar tus lágrimas y sacarte una sonrisa. Tu corazón ya no va a latir solo y tus suspiros siempre van a ser escuchados. Estoy dispuesto a pelear por tu bien. No te olvides que estoy acá, siempre estoy acá, siempre voy a estar acá.\n\nCuando estamos juntos, nuestras manos están distanciadas por menos de cinco segundos. Esos cinco segundos, esos quince centímetros recorridos lo son todo. En ese momento, el aire se curva y el tiempo corre más lento mientras busco el roce de tu piel con la yema de mis dedos. Todo comienza a tener sentido en ese momento, me doy cuenta por qué sigo peleando, por qué sigo insistiendo. En esos instantes, el silencio parece susurrar nuestros nombres, el universo emula una sonrisa al ver concretado su más grande plan. El suelo se disfraza de cielo cuando caminamos con las manos apretadas, empiezo a flotar. Me gusta creer que hay magia en todo esto, y estoy convencido de que la hay.\n\nTe escucho cantar, te veo bailar, te admiro mientras estudiás lo que te gusta. Te veo contenta y mi corazón opta por acompañar ese sentimiento. Tu felicidad me contagia. Tu felicidad es la mía. Mi cerebro también lo elige, porque esto también es racional. Me dejo llevar por mis sentimientos, pero premeditando todo, analizando todo. Mi cerebro, mi corazón y la totalidad del cúmulo de átomos que se agrupan para formarme están de acuerdo. Soy feliz con vos.\n\nNo hay día en el que no cierre los ojos y se formen imágenes mentales sobre nuestro futuro. Imagino el próximo beso que te voy a dar, nuestra próxima risa juntos, nuestras primeras vacaciones juntos, nuestra futura convivencia, te imaginé en el altar, te imaginé haciéndole upa a nuestro hijo recién nacido, cantándole canciones de cuna, nos imaginé viendo sus primeros pasos, viendo cómo termina el colegio, nos imaginé en las cenas familiares, nos imaginé conociendo a nuestros nietos, nos imaginé viejitos, siempre con el amor intacto.\n\n¿Me brillarán más los ojos cuando hablo de vos?, yo no los puedo ver pero debe ser así porque hasta la gente de mi entorno que no te conoce te tiene cariño. Sé transmitir una imagen mental muy acorde a lo mucho que te amo, como hasta para que mi psicóloga te tenga cariño y siempre me lo diga. Debe ser muy evidente el enamoramiento que tengo hasta para absolutos desconocidos, porque voy sonriendo en el colectivo mientras hablo con vos, porque agarro el celular entre serie y serie cuando estoy en el gimnasio para contarte lo que estoy haciendo.",
  "Me disculpo de antemano por los tintes que tomarán los siguientes párrafos, pero hay hechos que no se pueden obviar. Como que con cada roce mi piel se enardece, que me conmueve sentir tus lunares, contarlos, memorizar sus posiciones pero también llegar a ese punto de rozar, tocar y penetrar con cada uno de mis sentidos los rincones más íntimos de tu cuerpo. Oler tu calor, escuchar tu sonrisa, tocar tus sentimientos, degustar tus palabras y ver tu corazón. Amo que mis sentidos se alteren, que se fusionen, que se amalgamen mientras pelean por sentir cada uno de los detalles que te componen. Que mis ojos le griten a mis oídos que quieren ver esos susurros, que mis manos le insistan a mi nariz que desean tocar tu dulce aroma.\n\nY es difícil ponerme superficial, intentar hablar solamente de un cuerpo, cuando me refiero a una persona que moviliza todo en mí con sus palabras, con sus sentimientos; pero también me es inevitable recaer en ese tópico cuando observo a esa persona y no puedo evitar que mi alma se arrodille ante su presencia.\n\nQuiero entrar en vos y no salir nunca. Quiero entrar en cada una de las acepciones que tiene esa palabra, quiero que la idea de un futuro conmigo penetre tu cerebro, pero también que mi lengua nunca salga de tu boca. Quiero estimularte, hacerte sentir en el cielo mientras mi saliva recorre tu oreja, desde tu lóbulo hasta tu hélix, humectando lentamente el cartílago. Quiero que el extremo de mi lengua tensada cumpla el deseo exacto que tu cuello posee, o que en una forma más relajada y lenta haga que tu piel se erice. Necesito entrar en vos, en la acepción literal de esa frase, poder satisfacerte en cada posición que decidas, lograr que entre tus muslos florezca un manantial honrando mi nombre, mi presencia. Necesito que el calor del verano quede opacado por el que generan nuestros cuerpos, mientras mi dureza y tu rocío adornan de amor e incandescencia aquella habitación que desee alojarnos. Preciso que las luces rojas sean solo un reflejo visual de lo que pasa por nuestras mentes mientras mi mano acaricia tus milímetros más íntimos con el objetivo de que un goce se genere en tu interior, que olvides las preocupaciones por un rato mientras cada extremidad de mi cuerpo intenta lograr que el tuyo garúe sobre el mío.\n\nY cuando el temblor de tus piernas ceda y ese río corra entre vos y yo, quiero quedarme ahí, sumergido en el eco de tu respiración agitada, en el estridente sonido de tus “shhh”, en tus súplicas para frenar por miedo a no soportar un nuevo intento de desatar el pico más alto de tu excitación. Que el silencio de la habitación nos envuelva mientras nuestros corazones acelerados marcan el ritmo del acto sexual más amoroso que jamás se haya gestado, porque no somos capaces de hacer nada sin amor. Mientras gozamos, nos es inevitable besarnos, acariciarnos, hablarnos dulcemente, porque el amor siempre está presente cuando se trata de nosotros.\n\nMás allá de un beso, una penetración, una lamida; lo que más me abrasa, lo que más me enciende, lo que más me incinera es la idea de pertenecerte, la sensación de que me perteneces. La posibilidad de que por unos segundos, unos minutos, unas horas, todo en mí es tuyo, que todo en vos es mío.",
  "Cuando llega la hora de que amanezca, la hora de que el brillo del Sol seque los rastros de la noche anterior, queda en mi retina la forma en la que tus ojos gritaron mi nombre con pura devoción durante un momento de absoluto disfrute. Y cuando la luz del día termina de secarlos, queda ese lazo invisible que nos une, queda la certeza de haber habitado un mismo lugar en un mismo instante, de habernos fusionado. Queda la huella de habernos pertenecido, y yo quedo con el deseo de que se repita cada vez que el Sol se esconda y permita que el calor del ambiente lo proporcionemos nosotros.\n\nY se repite, siempre se repite. Porque nuestros cuerpos se añoran, se necesitan. Porque tu tacto necesita de mi olfato y mi visión precisa de tu escucha. Siempre volvemos a hacerlo porque el libido se despertó en dos personas que estaban caminando lentamente hacia la nulidad de deseo sexual. Nos encendimos, y nos mantenemos encendidos cada vez que intimamos.\n\nCómo me gusta cuando la ferocidad de este amor nos agarra desprevenidos. Cuando entre charla y risa, el deseo de unirnos se va volviendo más fuerte, y qué bien que nos unimos. La química es indiscutible, nos entendemos sin hablar, e igual nos hablamos. Me gusta estar dentro tuyo, gozar de tus rincones más profundos, mientras en mi cabeza proceso la idea de que lo que está sucediendo no es un sueño, aunque lo parece. Me enciende tu goce, escuchar cómo gozás, notar esos movimientos pélvicos conscientes o inconscientes que delatan lo que sentís. Quiero susurrarte al oído, que el amor entre por tus oídos y por todos los orificios de tu cuerpo. Quiero que tu transpiración sea la respuesta a una noche de incandescencia que guardes por siempre en la memoria, que cada gota de mi saliva que ingieras te ayude a llevarte siempre un recuerdo mío.\n\nY la memoria es un enemigo cruel, porque es difícil seguir con mi día a día habiéndote visto en las posiciones más íntimas. Cuando cierro los ojos se recrean esas imágenes mentales que me llevan de regreso a ese sueño, ese sueño que me cuesta creer que no es un sueño. Mis manos guardan en su memoria esa textura humectada inolvidable, mi cuello lleva las marcas de este amor, mi lengua añora los pliegues de esa oreja y mi cerebro sueña con volver a entrar en vos, con volver a penetrarte con cada una de mis extremidades.\n\nQué éxtasis tenerte, que éxtasis que ese cuerpo sea mío por un rato, qué éxtasis poder hacerte mía. Y yo soy tuyo, porque cada centímetro de mi cuerpo es tuyo, porque todo lo que derramo también es tuyo, porque cada gota de transpiración cuando estoy con vos o cuando yazco a solas en mi cama, también es tuya. Soy tuyo, y vos sos mía. Siempre lo vamos a ser, pero cómo me gusta reforzarlo cuando nuestros cuerpos se unen.",

  // agregá más páginas si querés
];
const TOTAL_PAGES = 24; // Cambialo si vas a usar otra cantidad

// 2) Video: poné un link de YouTube o Vimeo (string) O deja vacío y poné un archivo local (ver abajo).
const videoURL = "https://www.youtube.com/embed/RpdVHksS740"; // Ejemplo. Pegar tu link embed.

// 3) Poemas

// Lista de poemas
const poems = [
  {
    title: "El Zorzal",
    verses: `El zorzal canta en las mañanas claras
y el sol duerme sobre su canto
Canta mientras posa en la rama del árbol
Hoy le toca cantar para un solo oyente
Quisiera volver a hacerlo para dos,
como supo hacerlo

Mañana volverá a cantar,
deseando que el público se duplique
Y así será, aunque el zorzal todavía no lo sepa`
  },
  {
    title: "Pernoctar",
    verses: `Las sábanas yacen sobre la cama,
 vacías, aunque yo esté sobre ellas.
Añoran la presencia de aquella,
 la que ilumina la habitación
 cuando las luces se apagan.
Anhelan su regreso,
 mientras se enfrían
 en su ausencia.
`
  },
  {
    title: "Agujas furiosas",
    verses: `Los minutos estilan un ritmo lento, pausado y uniforme
Son pacientes y observan al mundo correr a su alrededor

Pero cuando dos almas se juntan, deciden correr, volar
Las agujas se enfurecen mientras el reloj queda estático

Las almas intentan que el tic tac cese,
pero les es imposible
Solo pueden disfrutarse,
mientras el minutero continúa acelerando
`
  },
  {
    title: "Mañana",
    verses: `Amanece y siento el tacto del sol quemándome la espalda,
y aún me siento frío

El canto de cada uno de esos pájaros entra por mis oídos,
me penetra mientras me sumo en el silencio

La luz me busca mientras yo busco tu sombra
El cielo no entiende de tu ausencia, yo convivo con ella
`
  },
  {
    title: "Sucedió",
    verses: `Miro mi reflejo y me encuentro,
creí que ya no sucedería

Escucho mis pensamientos y me sacan una sonrisa,
creí que ya no sucedería

Siento mi corazón latiendo más rápido,
creí que ya no sucedería

Sucedió, porque uno solo no siempre basta`
  },
];

let currentPoem = 0;

const poemPage = document.getElementById("poemPage");
const poemCounter = document.getElementById("poemCounter");
const prevPoemBtn = document.getElementById("prevPoem");
const nextPoemBtn = document.getElementById("nextPoem");

function renderPoem(index) {
  const poem = poems[index];
  if (!poem) return;

  poemPage.innerHTML = `
    <div class="poem">
      <h3>${poem.title}</h3>
      <pre>${poem.verses}</pre>
    </div>
  `;
  poemCounter.textContent = `${index + 1} / ${poems.length}`;
  prevPoemBtn.disabled = index === 0;
  nextPoemBtn.disabled = index === poems.length - 1;
}

prevPoemBtn.addEventListener("click", () => {
  if (currentPoem > 0) {
    currentPoem--;
    renderPoem(currentPoem);
  }
});

nextPoemBtn.addEventListener("click", () => {
  if (currentPoem < poems.length - 1) {
    currentPoem++;
    renderPoem(currentPoem);
  }
});

document.getElementById("openPoems").addEventListener("click", () => {
  document.getElementById("poemModal").classList.remove("hidden");
  renderPoem(currentPoem);
});


// 4) Carta para el hijo
const letterToChild = `Te extraño. Te extraño sin siquiera conocerte. Te extraño porque necesito sentir tu piel rozando con la mía, porque quiero escuchar tu risa y consolarte hasta secar cada una de tus lágrimas. Te extraño porque el deseo de conocerte me moviliza. Mamá también te extraña, mamá también está ansiosa por conocerte. Y todavía no estás ni cerca de llegar, qué ansioso me pongo por ese motivo.

Papá la está pasando muy mal, pero desde que conoció a mamá las cosas empezaron a mejorar, la vida empezó a sonreír mucho más. No veo la hora de acariciarte esos rulitos, de verte crecer y cumplir cada sueño que te propongas, aunque me va a doler tanto superar cada etapa de tu crecimiento. Siempre vas a ser mi chiquito, mi Nico.

Ayer dormí con tu mamá por segunda vez en mi vida, a un mes de empezar a salir, todavía no somos novios, pero ya hablamos de vos y estamos ansiosos por conocerte. Mamá me hizo poner mi mano en su vientre, donde vas a estar por nueve meses. Me hizo dirigirte mis primeras palabras, aunque todavía no las escuches. “Te amo”, eso fue lo primero que me salió al pensar en vos.

Porque el simple hecho de tu posible existencia me hace amarte, porque vas a ser parte de mí, porque vas a ser parte de tu mamá.

Te vamos a hacer feliz, te vamos a consentir y contener siempre que lo necesites. Nunca dudes en hablar con nosotros cuando te sientas mal, porque nunca vas a estar solo, todavía no fuiste concebido y ya estás acompañado. Mamá y papá siempre van a estar. No queremos y nunca vamos a querer hacerte doler, y cada vez que una palabra que salga de nuestra boca te haga sentir mal, vamos a ir a dormirnos con una culpa indescriptible. Vamos a dejar todo lo que tenemos para poder hacerte feliz.

Es 10 de noviembre de 2025, hoy mamá soñó con vos, con el día de tu nacimiento. Yo me desperté pensando en vos, en escribirte esto, en aprender una canción en piano para poder tocarla antes de que te vayas a dormir. Sos una de las metas que tenemos con mamá, una de ellas, pero la más importante.

Hace tres meses casi que no nos conocíamos con tu mamá, hoy ya tenemos decidido cuál va a ser tu nombre. Nicolás, como los hermanos de tus dos abuelos. Nicolás, como tu mamá siempre quiso nombrar a su hijo. Su convicción me convenció. Ese va a ser tu nombre, y cada vez que cierro los ojos, pienso tanto en vos como en tu mamá.

Meses atrás, a mediados de este año, hablé con mi mamá, tu abuela. Le dije entre lágrimas que no quería tener un futuro, que la vida ya no merecía ser vivida. Estoy atravesando una depresión muy dolorosa, de la que me cuesta salir. Pero hoy sí quiero vivir, hoy sí quiero tener un futuro, y vos sos parte de él. 

`;

// 5) Quiz: preguntas estilo Sporcle (opciones, index de respuesta)
const quiz = [
  {
    q: "¿Qué día nos vimos por primera vez?",
    options: ["31 de mayo", "30 de junio", "20 de agosto", "13 de junio"],
    ans: 0
  },
  {
    q: "¿Qué comimos juntos por primera vez?",
    options: ["Pizza Nico","Empanadas Nico","Sanguche de milanesa"],
    ans: 2
  },
  {
    q: "¿Qué dijo 'te amo' primero?",
    options: ["Iñaki", "Mía"],
    ans: 1
  },
  {
    q: "¿Quién dio el primer beso?",
    options: ["Iñaki", "Mía"],
    ans: 0
  },
    {
    q: "¿Quién salvó del suicidio a quién en otra vida?",
    options: ["Iñaki salvó a Mía", "Mía salvó a Iñaki"],
    ans: 1
  },
  {
    q: "¿Dónde nos juntamos a solas por primera vez?",
    options: ["Barrio Uno", "Las Toscas", "Parque Jorge Newbery", "Adrogué"],
    ans: 2
  },
    {
    q: "¿Qué día nos dimos nuestro primer beso?",
    options: ["3 de octubre", "7 de octubre", "9 de octubre", "10 de octubre"],
    ans: 3
  },
  {
    q: "¿Cómo nos decíamos antes de formar la relación amorosa?",
    options: ["Dibu","Rulli","Armani", "Walter Benítez"],
    ans: 2
  },  {
    q: "¿Qué día nos vamos a casar?",
    options: ["10 de octubre", "9 de septiembre", "8 de agosto", "6 de junio"],
    ans: 2
  },
  {
    q: "¿Cómo se va a llamar nuestro primer hijo?",
    options: ["Nicolás", "Renato", "Enzo", "Iñaki Jr."],
    ans: 0
  }
];

// 6) Playlist: arreglo con objetos {title, artist, comment, url (opcional)}
const playlist = [
  { title: "Otras vidas", artist: "Carlos Rivera", comment: "La primera canción 'nuestra', la que define nuestro vínculo ancestral", url: "https://open.spotify.com/intl-es/track/4PlJVuGGWP8asQJDl2pCL4?si=3ed8fd8c87cf4cbc" },
  { title: "Digan lo que digan", artist: "Carlos Rivera", comment: "Nuestro puto padre mandando a callar a los detractores", url: "https://open.spotify.com/intl-es/track/3fVCHWVR5B1iCs4srsl0Sz?si=b957f31174184480" },
  { title: "Through the dark", artist: "One Direction", comment: "La primera canción que recuerdo que me dediques en una notita", url: "https://open.spotify.com/intl-es/track/1a0PcmEJAOEp4ZT3YtSLkM?si=3774a8146de04a21" },
  { title: "Princesa", artist: "Margarita y Rey", comment: "Somos esos", url: "https://open.spotify.com/intl-es/track/0IbD0w9MDfwgBWiM4TAma7?si=34de78ed21464c2e" },
  { title: "Otras vidas", artist: "Carlos Rivera", comment: "La primera canción 'nuestra', la que define nuestro vínculo ancestral", url: "https://open.spotify.com/intl-es/track/4PlJVuGGWP8asQJDl2pCL4?si=3ed8fd8c87cf4cbc" },
  { title: "Otras vidas", artist: "Carlos Rivera", comment: "La primera canción 'nuestra', la que define nuestro vínculo ancestral", url: "https://open.spotify.com/intl-es/track/4PlJVuGGWP8asQJDl2pCL4?si=3ed8fd8c87cf4cbc" },
  { title: "Otras vidas", artist: "Carlos Rivera", comment: "La primera canción 'nuestra', la que define nuestro vínculo ancestral", url: "https://open.spotify.com/intl-es/track/4PlJVuGGWP8asQJDl2pCL4?si=3ed8fd8c87cf4cbc" },
  { title: "Otras vidas", artist: "Carlos Rivera", comment: "La primera canción 'nuestra', la que define nuestro vínculo ancestral", url: "https://open.spotify.com/intl-es/track/4PlJVuGGWP8asQJDl2pCL4?si=3ed8fd8c87cf4cbc" },
  { title: "Otras vidas", artist: "Carlos Rivera", comment: "La primera canción 'nuestra', la que define nuestro vínculo ancestral", url: "https://open.spotify.com/intl-es/track/4PlJVuGGWP8asQJDl2pCL4?si=3ed8fd8c87cf4cbc" },


];

// 7) Presentaciones: cada entry es un objeto { title, description, fileUrl }
// fileUrl puede ser un link a un archivo en línea o el path a un archivo local
const presentations = [
  {
    title: "Presentación Canva Ejemplo",
    description: "Una presentación creada en Canva.",
    fileUrl: "https://www.canva.com/design/DAG4yfIAvWs/lvODmbgH9aJk7KrQRprkaw/edit?utm_content=DAG4yfIAvWs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" // link público
  },
  {
    title: "Otra presentación online",
    description: "Ejemplo de presentación rápida en línea.",
    fileUrl: "https://docs.google.com/presentation/d/tu-link/view"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const openPresentationsBtn = document.getElementById("openPresentations");

  openPresentationsBtn.addEventListener("click", () => {
    // Abrir la primera presentación del array en otra pestaña
    const firstPpt = presentations[0];
    window.open(firstPpt.fileUrl, "_blank"); // "_blank" abre en nueva pestaña
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const openPresentationsBtn = document.getElementById("openPresentations");
  const contentDiv = document.getElementById("content"); // div donde mostrar los links

  openPresentationsBtn.addEventListener("click", () => {
    contentDiv.innerHTML = ""; // limpiamos contenido

    presentations.forEach(ppt => {
      const li = document.createElement("li");
      li.textContent = `${ppt.title}: ${ppt.description} `;

      const link = document.createElement("a");
      link.href = ppt.fileUrl;
      link.target = "_blank"; // abre en nueva pestaña
      link.textContent = "Abrir";

      li.appendChild(link);
      contentDiv.appendChild(li);
    });
  });
});

/* ============================================
   LÓGICA DE LA INTERFAZ (robusta y tolerante)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // helpers
  const get = id => document.getElementById(id);
  const safeOn = (id, evt, fn) => { const el = get(id); if(el) el.addEventListener(evt, fn); };
  const escapeHtml = s => String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');

  /* ---------------------------
     Funciones para crear UI si faltan
     --------------------------- */

  // Si falta el modal de poemas o los controles, los creamos para asegurar que el paginado funcione
  function ensurePoemModalStructure() {
    // Si ya existe #poemModal con la estructura esperada devolvemos los refs
    let modal = get('poemModal');
    if (!modal) {
      // crear modal completo mínimo
      modal = document.createElement('div');
      modal.id = 'poemModal';
      modal.className = 'modal hidden';
      modal.innerHTML = `
        <div class="modal-content">
          <button class="close" data-close="poemModal">✖</button>
          <div class="poem-wrapper">
            <div id="poemPage" class="poem-page"></div>
            <div class="poem-controls">
              <button id="prevPoem" class="muted">« Anterior</button>
              <span id="poemCounter">0 / 0</span>
              <button id="nextPoem" class="muted">Siguiente »</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      // attach close listener
      modal.querySelectorAll('.close').forEach(b => {
        if(!b.dataset._closeAttached) {
          b.addEventListener('click', () => modal.classList.add('hidden'));
          b.dataset._closeAttached = '1';
        }
      });
    } else {
      // si existe modal pero faltan piezas, las insertamos
      const content = modal.querySelector('.modal-content') || modal;
      if (!get('poemPage')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'poem-wrapper';
        wrapper.innerHTML = `
          <div id="poemPage" class="poem-page"></div>
          <div class="poem-controls">
            <button id="prevPoem" class="muted">« Anterior</button>
            <span id="poemCounter">0 / 0</span>
            <button id="nextPoem" class="muted">Siguiente »</button>
          </div>
        `;
        content.appendChild(wrapper);
      } else {
        // aseguremos que existan prev/next and counter
        if(!get('prevPoem')) {
          const btn = document.createElement('button'); btn.id='prevPoem'; btn.className='muted'; btn.textContent='« Anterior';
          const controls = content.querySelector('.poem-controls') || (function(){ const d=document.createElement('div'); d.className='poem-controls'; content.appendChild(d); return d; })();
          controls.insertBefore(btn, controls.firstChild);
        }
        if(!get('nextPoem')) {
          const btn = document.createElement('button'); btn.id='nextPoem'; btn.className='muted'; btn.textContent='Siguiente »';
          const controls = content.querySelector('.poem-controls') || (function(){ const d=document.createElement('div'); d.className='poem-controls'; content.appendChild(d); return d; })();
          controls.appendChild(btn);
        }
        if(!get('poemCounter')) {
          const span = document.createElement('span'); span.id='poemCounter'; span.textContent='0 / 0';
          const controls = content.querySelector('.poem-controls') || (function(){ const d=document.createElement('div'); d.className='poem-controls'; content.appendChild(d); return d; })();
          controls.insertBefore(span, get('nextPoem') || null);
        }
      }
      // attach close handlers safe
      content.querySelectorAll('.close').forEach(b => {
        if(!b.dataset._closeAttached) {
          b.addEventListener('click', () => {
            const id = b.dataset.close; if(id) { const el = get(id); if(el) el.classList.add('hidden'); }
          });
          b.dataset._closeAttached = '1';
        }
      });
    }
    return {
      modalEl: get('poemModal'),
      pageEl: get('poemPage'),
      prevBtn: get('prevPoem'),
      nextBtn: get('nextPoem'),
      counterEl: get('poemCounter')
    };
  }

  /* ---------------------------
     Modal helpers
     --------------------------- */
  function openModal(id) {
    const el = get(id);
    if (!el) return;
    el.classList.remove('hidden');
  }
  function closeModal(id) {
    const el = get(id);
    if (!el) return;
    el.classList.add('hidden');
    if (id === 'videoModal') {
      const f = get('videoFrame'); if (f) f.src = '';
    }
  }

  /* ---------------------------
     Safe triggers (no rompen si faltan elementos)
     --------------------------- */
  safeOn('openBook', 'click', () => { openModal('bookModal'); renderPage(); });
  safeOn('openVideo', 'click', () => { openModal('videoModal'); const frame = get('videoFrame'); if (frame) frame.src = videoURL; });
  safeOn('openPoems', 'click', () => { const s = ensurePoemModalStructure(); poemIndex = 0; renderPoemPage(poemIndex); openModal('poemModal'); });
  safeOn('openLetter', 'click', () => openModal('letterModal'));
  safeOn('openQuiz', 'click', () => openModal('quizModal'));
  safeOn('openPlaylist', 'click', () => openModal('playlistModal'));

  // revealProposal could be missing
  const revealBtn = get('revealProposal');
  if (revealBtn) revealBtn.addEventListener('click', () => openModal('proposalModal'));

  // close buttons
  document.querySelectorAll('.close').forEach(b => {
    if(!b.dataset._closeAttached) {
      b.addEventListener('click', () => {
        const id = b.dataset.close; if (id) closeModal(id);
      });
      b.dataset._closeAttached = '1';
    }
  });

  /* =========================
     Libro (páginas)
     ========================= */
  let pageIndex = 0;
  const bookPageEl = get('bookPage');
  const pageCounter = get('pageCounter');

  function renderPage() {
    if (!bookPageEl) return;
    const content = bookPages[pageIndex] || `Página ${pageIndex+1} — (aún vacía). Pega tu texto en app.js > bookPages.`;
    bookPageEl.innerHTML = escapeHtml(content).replace(/\n/g, '<br>');
    if (pageCounter) pageCounter.textContent = `${pageIndex+1} / ${TOTAL_PAGES}`;
  }

  safeOn('prevPage', 'click', () => { if (pageIndex > 0) pageIndex--; renderPage(); });
  safeOn('nextPage', 'click', () => { if (pageIndex < TOTAL_PAGES - 1) pageIndex++; renderPage(); });

  // inicial openBook handler sets pageIndex=0 already above

/* =========================
   POEMAS (PAGINADO)
   ========================= */
let poemIndex = 0;

function renderPoemPage(index) {
  // ensure DOM pieces exist (crea si faltan)
  const refs = ensurePoemModalStructure();
  const pageEl = refs.pageEl;
  const prevBtn = refs.prevBtn;
  const nextBtn = refs.nextBtn;
  const counterEl = refs.counterEl;
  if (!pageEl) return;

  // si no hay poemas
  if (!Array.isArray(poems) || poems.length === 0) {
    pageEl.innerHTML = `<h3>Aún no hay poemas</h3><p>Pegá tus poemas en app.js → const poems = [...]</p>`;
    if (counterEl) counterEl.textContent = `0 / 0`;
    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    return;
  }

  // mostrar poema actual
  const poem = poems[index];
  if (!poem || typeof poem !== 'object') return;

  const safeTitle = escapeHtml(poem.title || '');
  const safeVerses = escapeHtml(poem.verses || '').replace(/\n/g, '<br>');

  pageEl.innerHTML = `
    <div class="poem">
      <h3>${safeTitle}</h3>
      <pre>${safeVerses}</pre>
    </div>
  `;

  if (counterEl) counterEl.textContent = `${index + 1} / ${poems.length}`;
  if (prevBtn) prevBtn.disabled = (index <= 0);
  if (nextBtn) nextBtn.disabled = (index >= poems.length - 1);
}


  // init pagination handlers (attach once)
  (function initPoemPaginationHandlers(){
    const refs = ensurePoemModalStructure();
    const prevBtn = refs.prevBtn;
    const nextBtn = refs.nextBtn;

    if (prevBtn && !prevBtn.dataset._attached) {
      prevBtn.addEventListener('click', () => {
        if (poemIndex > 0) { poemIndex--; renderPoemPage(poemIndex); }
      });
      prevBtn.dataset._attached = '1';
    }
    if (nextBtn && !nextBtn.dataset._attached) {
      nextBtn.addEventListener('click', () => {
        if (poemIndex < poems.length - 1) { poemIndex++; renderPoemPage(poemIndex); }
      });
      nextBtn.dataset._attached = '1';
    }

    // keyboard navigation while modal open
    document.addEventListener('keydown', (e) => {
      const modal = get('poemModal');
      if(!modal || modal.classList.contains('hidden')) return;
      if (e.key === 'ArrowRight') {
        if (poemIndex < poems.length - 1) { poemIndex++; renderPoemPage(poemIndex); }
      } else if (e.key === 'ArrowLeft') {
        if (poemIndex > 0) { poemIndex--; renderPoemPage(poemIndex); }
      }
    });
  })();

  // Exponer la función por si querés ejecutarla manualmente desde consola
  window.renderPoemPage = (i=0) => { poemIndex = i; renderPoemPage(poemIndex); };

  // render inicial (intento seguro)
  try { renderPoemPage(poemIndex); } catch(e){ /* no crítico */ }

  /* =========================
     Letter, Quiz y Playlist
     ========================= */

  // Letter
  const letterEl = get('letterContent');
  if (letterEl) letterEl.textContent = letterToChild;

  // Quiz
let currentQuestion = 0;
let score = 0;

function renderQuiz() {
  const quizQuestionEl = get('quizQuestion');
  const quizOptionsEl = get('quizOptions');
  const quizResultEl = get('quizResult');

  // Si terminamos todas las preguntas
  if (currentQuestion >= quiz.length) {
    if (quizQuestionEl) {
      quizQuestionEl.textContent = `🎉 ¡Quiz terminado! Tu puntaje: ${score} / ${quiz.length}`;
    }
    if (quizOptionsEl) {
      quizOptionsEl.innerHTML = '';
      const closeBtn = document.createElement('button');
      closeBtn.textContent = 'Cerrar quiz';
      closeBtn.addEventListener('click', () => {
        const quizModal = get('quizModal');
        if (quizModal) quizModal.classList.add('hidden');
      });
      quizOptionsEl.appendChild(closeBtn);

      // Mensaje según puntaje
      const msg = document.createElement('div');
      msg.style.marginTop = '12px';
      msg.style.fontWeight = 'bold';
      msg.style.color = '#000000ff';
      if (score <= 2) msg.textContent = "Atrás detractores de Miaki!!! Aguante esta relación";
      else if (score <= 4) msg.textContent = "Fake fan, estudiá tarado!";
      else if (score <= 6) msg.textContent = "Un poco sabés pero te falta leche";
      else if (score <= 8) msg.textContent = "FAN DE ESTA RELACIÓN, GRACIAS!";
      else msg.textContent = "Claramente sos Miuchis u Iñuñu, o alguien demasiado fan";
      quizOptionsEl.appendChild(msg);
    }
    if (quizResultEl) quizResultEl.classList.add('hidden');
    return;
  }
  // Pregunta actual
  const q = quiz[currentQuestion];
  if (!q) return;
  if (quizQuestionEl) quizQuestionEl.textContent = q.q;
  if (!quizOptionsEl || !quizResultEl) return;

  quizOptionsEl.innerHTML = '';
  quizResultEl.classList.add('hidden');

  q.options.forEach((o, idx) => {
    const btn = document.createElement('button');
    btn.textContent = o;

    btn.addEventListener('click', () => {
      quizResultEl.classList.remove('hidden');

      // Bloqueamos todos los botones y limpiamos clases
      Array.from(quizOptionsEl.children).forEach(b => b.classList.remove('correct','incorrect'));
      Array.from(quizOptionsEl.children).forEach(b => b.disabled = true);

      if (idx === q.ans) {
        btn.classList.add('correct');
        quizResultEl.textContent = '✔ Correcto';
        score++;
      } else {
        btn.classList.add('incorrect');
        quizOptionsEl.children[q.ans].classList.add('correct');
        quizResultEl.textContent = `✖ Incorrecto — La respuesta correcta era: "${q.options[q.ans]}"`;
      }

      // Avanzar a la siguiente pregunta después de 1.2s
      setTimeout(() => {
        currentQuestion++;
        renderQuiz();
      }, 1200);
    });

    quizOptionsEl.appendChild(btn);
  });
}

// No necesitamos nextQuestion, ahora todo se controla desde los botones de las opciones


  safeOn('openQuiz', 'click', () => { currentQuestion = 0; score = 0; renderQuiz(); });

  // Playlist
  function renderPlaylist() {
    const playlistEl = get('playlist');
    if (!playlistEl) return;
    playlistEl.innerHTML = '';
    playlist.forEach((p,i) => {
      const item = document.createElement('div');
      item.style.padding = '8px';
      item.style.marginBottom = '8px';
      item.style.background = 'rgba(255,255,255,0.02)';
      item.innerHTML = `<strong>${p.title}</strong> — ${p.artist}<div style="font-size:13px;color:#bfc9d9">${p.comment}</div>`;
      if (p.url) item.innerHTML += `<div style="margin-top:6px"><a href="${p.url}" target="_blank">Escuchar</a></div>`;
      playlistEl.appendChild(item);
    });
  }

  renderPlaylist();

  // Proposal buttons
  if (get('yesBtn')) get('yesBtn').addEventListener('click', () => { get('yesBtn').textContent = '¡Qué felicidad! ❤️'; });
  if (get('noBtn')) get('noBtn').addEventListener('click', () => { get('noBtn').textContent = 'Gracias por tu honestidad ✨'; });

  // keyboard for book as well
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
    if (e.key === 'ArrowRight' && get('bookModal') && !get('bookModal').classList.contains('hidden')) {
      const nb = get('nextPage'); if (nb) nb.click();
    }
    if (e.key === 'ArrowLeft' && get('bookModal') && !get('bookModal').classList.contains('hidden')) {
      const pb = get('prevPage'); if (pb) pb.click();
    }
  });

}); // end DOMContentLoaded
