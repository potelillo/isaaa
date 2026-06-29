const questions = [
  {cat:"Renacimiento",diff:"Media",art:"La Gioconda",q:"¿Quién pintó la Mona Lisa?",a:["Leonardo da Vinci","Rafael","Miguel Ángel","Tiziano"],ok:0,c:["#3b6c54","#d9a441"]},
  {cat:"Museos",diff:"Media",art:"El Jardín de las Delicias",q:"¿En qué museo se conserva El Jardín de las Delicias?",a:["Museo del Prado","Louvre","Uffizi","MoMA"],ok:0,c:["#315b7c","#84c16b"]},
  {cat:"Barroco",diff:"Difícil",art:"Éxtasis de Santa Teresa",q:"¿Qué escultor realizó el Éxtasis de Santa Teresa?",a:["Gian Lorenzo Bernini","Canova","Donatello","Rodin"],ok:0,c:["#6d351e","#f0b066"]},
  {cat:"Arte español",diff:"Difícil",art:"Las Meninas",q:"En Las Meninas, ¿qué recurso espacial es clave para implicar al espectador?",a:["El espejo del fondo","La ventana inexistente","El marco dorado real","La ausencia de perspectiva"],ok:0,c:["#2b2a36","#c9a06a"]},
  {cat:"Impresionismo",diff:"Media",art:"Impresión, sol naciente",q:"¿Qué obra dio nombre al impresionismo?",a:["Impresión, sol naciente","Olympia","La Grenouillère","El almuerzo de los remeros"],ok:0,c:["#f08455","#6ab7d6"]},
  {cat:"Ukiyo-e",diff:"Difícil",art:"La gran ola",q:"¿Quién creó La gran ola de Kanagawa?",a:["Hokusai","Hiroshige","Utamaro","Kuniyoshi"],ok:0,c:["#123d73","#e9d6a7"]},
  {cat:"Vanguardias",diff:"Media",art:"Guernica",q:"¿Qué artista pintó Guernica?",a:["Pablo Picasso","Joan Miró","Juan Gris","Dalí"],ok:0,c:["#111111","#eeeeee"]},
  {cat:"Surrealismo",diff:"Media",art:"Relojes blandos",q:"¿Cuál es el título real del famoso cuadro de Dalí con relojes blandos?",a:["La persistencia de la memoria","El tiempo dormido","La hora líquida","Sueño de Cadaqués"],ok:0,c:["#c69a58","#3f6f9a"]},
  {cat:"Arquitectura",diff:"Difícil",art:"Casa Batlló",q:"¿Qué arquitecto diseñó la Casa Batlló?",a:["Antoni Gaudí","Lluís Domènech i Montaner","Josep Puig i Cadafalch","Santiago Calatrava"],ok:0,c:["#2c9ab7","#f07e88"]},
  {cat:"Escultura",diff:"Media",art:"El pensador",q:"¿Quién esculpió El pensador?",a:["Auguste Rodin","Camille Claudel","Brancusi","Maillol"],ok:0,c:["#4d3d32","#b8a58c"]},
  {cat:"Renacimiento",diff:"Difícil",art:"Nacimiento de Venus",q:"¿Quién pintó El nacimiento de Venus?",a:["Sandro Botticelli","Fra Angelico","Masaccio","Mantegna"],ok:0,c:["#5bb4c6","#f0c7a4"]},
  {cat:"Arte español",diff:"Muy difícil",art:"Pinturas negras",q:"¿Dónde pintó Goya originalmente sus Pinturas negras?",a:["En la Quinta del Sordo","En el Palacio Real","En Burdeos","En la Cartuja de Aula Dei"],ok:0,c:["#15110f","#a37b4b"]},
  {cat:"Barroco",diff:"Muy difícil",art:"Tenebrismo",q:"¿Qué pintor se asocia de forma esencial con el tenebrismo barroco?",a:["Caravaggio","Vermeer","Rubens","Poussin"],ok:0,c:["#050505","#c98c42"]},
  {cat:"Pintura flamenca",diff:"Difícil",art:"Matrimonio Arnolfini",q:"¿Qué detalle famoso aparece en el fondo del Matrimonio Arnolfini?",a:["Un espejo convexo","Un perro de mármol","Un reloj astronómico","Una calavera"],ok:0,c:["#24543f","#bd7b41"]},
  {cat:"Cubismo",diff:"Media",art:"Cubismo",q:"Además de Picasso, ¿qué artista fue clave en el cubismo?",a:["Georges Braque","Claude Monet","Edward Hopper","Alphonse Mucha"],ok:0,c:["#775a3a","#d6c192"]},
  {cat:"Expresionismo",diff:"Media",art:"El grito",q:"¿Quién pintó El grito?",a:["Edvard Munch","Egon Schiele","Kandinsky","Kirchner"],ok:0,c:["#ed7a37","#255f93"]},
  {cat:"Dadaísmo",diff:"Difícil",art:"Fuente",q:"¿Quién firmó la obra Fuente con el seudónimo R. Mutt?",a:["Marcel Duchamp","Man Ray","Francis Picabia","Max Ernst"],ok:0,c:["#f5f5f5","#333333"]},
  {cat:"Museos",diff:"Media",art:"Victoria de Samotracia",q:"¿En qué museo se encuentra la Victoria de Samotracia?",a:["Louvre","Prado","British Museum","Metropolitan"],ok:0,c:["#d9d2c4","#2f4c75"]},
  {cat:"Arte antiguo",diff:"Difícil",art:"Venus de Willendorf",q:"¿De qué periodo prehistórico es la Venus de Willendorf?",a:["Paleolítico","Neolítico","Edad del Bronce","Edad del Hierro"],ok:0,c:["#8f5d3a","#f0d1a0"]},
  {cat:"Arte contemporáneo",diff:"Media",art:"Campbell's Soup",q:"¿Qué artista popularizó las latas de sopa Campbell como icono pop?",a:["Andy Warhol","Roy Lichtenstein","Keith Haring","Basquiat"],ok:0,c:["#ef2e3d","#f4df54"]},
  {cat:"Pop Art",diff:"Difícil",art:"Ben-Day dots",q:"¿Qué artista usó de forma icónica puntos Ben-Day en sus obras?",a:["Roy Lichtenstein","Jackson Pollock","Mark Rothko","Jasper Johns"],ok:0,c:["#ffdd00","#ee2b44"]},
  {cat:"Abstracción",diff:"Media",art:"Composición",q:"¿Qué artista se considera pionero de la abstracción lírica y espiritual?",a:["Wassily Kandinsky","Mondrian","Malevich","Klee"],ok:0,c:["#3065c9","#f1d94b"]},
  {cat:"Neoplasticismo",diff:"Difícil",art:"Rojo, azul y amarillo",q:"¿Qué artista se asocia a cuadrículas de líneas negras y colores primarios?",a:["Piet Mondrian","Malevich","Kandinsky","Theo van Doesburg"],ok:0,c:["#f4d000","#d92027"]},
  {cat:"Arquitectura",diff:"Muy difícil",art:"Fallingwater",q:"¿Qué arquitecto diseñó la Casa de la Cascada?",a:["Frank Lloyd Wright","Le Corbusier","Mies van der Rohe","Alvar Aalto"],ok:0,c:["#4b5d42","#9fb0a1"]},
  {cat:"Fotografía",diff:"Difícil",art:"Momento decisivo",q:"¿Qué fotógrafo se asocia con la idea del “instante decisivo”?",a:["Henri Cartier-Bresson","Ansel Adams","Man Ray","Cindy Sherman"],ok:0,c:["#222222","#eeeeee"]},
  {cat:"Arte español",diff:"Muy difícil",art:"San Hugo en el refectorio",q:"¿Quién pintó San Hugo en el refectorio de los cartujos?",a:["Francisco de Zurbarán","Murillo","Ribera","El Greco"],ok:0,c:["#65462f","#e6d4ba"]},
  {cat:"Manierismo",diff:"Difícil",art:"El entierro del Conde de Orgaz",q:"¿Qué artista pintó El entierro del Conde de Orgaz?",a:["El Greco","Velázquez","Goya","Ribera"],ok:0,c:["#2b315e","#d1b15c"]},
  {cat:"Simbolismo",diff:"Muy difícil",art:"Klimt",q:"¿Qué movimiento influyó directamente en el lenguaje decorativo de Gustav Klimt?",a:["Secesión vienesa","Futurismo","Realismo socialista","Suprematismo"],ok:0,c:["#d6a535","#1a1a1a"]},
  {cat:"Arte medieval",diff:"Difícil",art:"Pantocrátor",q:"¿Qué representa normalmente un Pantocrátor románico?",a:["Cristo en majestad","Un rey guerrero","Un santo peregrino","Un ángel músico"],ok:0,c:["#8b412c","#e8c05a"]},
  {cat:"Escultura",diff:"Muy difícil",art:"Rapto de Proserpina",q:"¿Quién esculpió El rapto de Proserpina?",a:["Bernini","Miguel Ángel","Canova","Cellini"],ok:0,c:["#e7e1d5","#564b43"]},
  {cat:"Arte japonés",diff:"Difícil",art:"Ukiyo-e",q:"¿Qué significa aproximadamente ukiyo-e?",a:["Imágenes del mundo flotante","Arte de los templos","Pintura de tinta seca","Grabado imperial"],ok:0,c:["#e84f5f","#1c4b7a"]},
  {cat:"Museos",diff:"Difícil",art:"Las señoritas de Avignon",q:"¿En qué museo se conserva Las señoritas de Avignon?",a:["MoMA","Prado","Orsay","Tate Britain"],ok:0,c:["#c87e68","#253960"]},
  {cat:"Impresionismo",diff:"Difícil",art:"Ballet",q:"¿Qué artista impresionista retrató obsesivamente bailarinas?",a:["Edgar Degas","Monet","Renoir","Sisley"],ok:0,c:["#d9a0ad","#624b7d"]},
  {cat:"Postimpresionismo",diff:"Media",art:"Noche estrellada",q:"¿Quién pintó La noche estrellada?",a:["Vincent van Gogh","Paul Gauguin","Cézanne","Seurat"],ok:0,c:["#102f7a","#f2c84b"]},
  {cat:"Puntillismo",diff:"Difícil",art:"Grande Jatte",q:"¿Qué técnica hizo célebre Georges Seurat?",a:["Puntillismo","Frottage","Dripping","Collage cubista"],ok:0,c:["#77a67a","#f1d59a"]},
  {cat:"Arte digital",diff:"Media",art:"NFT / Pixel",q:"¿Qué concepto es más propio del arte digital generativo?",a:["Algoritmos que producen variaciones visuales","Temple al huevo","Perspectiva aérea renacentista","Grabado al aguafuerte"],ok:0,c:["#4828bd","#27f3d1"]},
  {cat:"Street Art",diff:"Media",art:"Banksy",q:"¿Qué artista urbano es conocido por sus plantillas satíricas?",a:["Banksy","JR","Invader","Shepard Fairey"],ok:0,c:["#111111","#ff2d55"]},
  {cat:"Arquitectura",diff:"Media",art:"Sagrada Familia",q:"¿Qué templo barcelonés es la obra inacabada más famosa de Gaudí?",a:["Sagrada Familia","Santa María del Mar","Catedral de Barcelona","Monasterio de Pedralbes"],ok:0,c:["#c28e56","#5ca5bb"]},
  {cat:"Barroco",diff:"Difícil",art:"La joven de la perla",q:"¿Quién pintó La joven de la perla?",a:["Johannes Vermeer","Rembrandt","Frans Hals","Rubens"],ok:0,c:["#1e2937","#d9b55a"]},
  {cat:"Arte español",diff:"Media",art:"Saturno",q:"¿Qué pintor español creó Saturno devorando a su hijo?",a:["Francisco de Goya","Velázquez","Sorolla","Picasso"],ok:0,c:["#18110d","#a9272d"]},
  {cat:"Escultura",diff:"Difícil",art:"David",q:"¿Qué material usó Miguel Ángel para su David?",a:["Mármol","Bronce","Terracota","Granito"],ok:0,c:["#e9e4db","#80786f"]},
  {cat:"Renacimiento",diff:"Muy difícil",art:"Sfumato",q:"¿Qué técnica difumina contornos para crear transiciones suaves de luz y sombra?",a:["Sfumato","Chiaroscuro","Impasto","Trompe-l'œil"],ok:0,c:["#6c6a5d","#d6c49a"]},
  {cat:"Arte español",diff:"Difícil",art:"Sorolla",q:"¿Qué elemento domina muchas escenas de playa de Joaquín Sorolla?",a:["La luz mediterránea","La perspectiva imposible","El fondo dorado bizantino","El collage de papel"],ok:0,c:["#59b7d8","#ffe39b"]},
  {cat:"Arte islámico",diff:"Difícil",art:"Alhambra",q:"¿Qué recurso ornamental es típico en la Alhambra?",a:["Lacería geométrica y yeserías","Vidrieras góticas figurativas","Columnas salomónicas doradas","Frescos al óleo"],ok:0,c:["#9a5734","#2b8794"]},
  {cat:"Gótico",diff:"Media",art:"Catedrales",q:"¿Qué elemento permite abrir grandes ventanales en la arquitectura gótica?",a:["Arbotantes","Órdenes clásicos","Cúpulas bulbosas","Muros ciclópeos"],ok:0,c:["#455a78","#d7e7ff"]},
  {cat:"Arte romano",diff:"Media",art:"Mosaico",q:"¿Cómo se llaman las pequeñas piezas de un mosaico?",a:["Teselas","Dovelas","Metopas","Peanas"],ok:0,c:["#b7773d","#e6c88a"]},
  {cat:"Arte griego",diff:"Difícil",art:"Discóbolo",q:"¿A qué escultor se atribuye el Discóbolo?",a:["Mirón","Fidias","Policleto","Praxíteles"],ok:0,c:["#d8d0c2","#59616b"]},
  {cat:"Futurismo",diff:"Difícil",art:"Velocidad",q:"¿Qué fascinaba especialmente al futurismo italiano?",a:["La velocidad y la máquina","La quietud monástica","La naturaleza muerta holandesa","El arte rupestre"],ok:0,c:["#ff4f2e","#2d2d2d"]},
  {cat:"Minimalismo",diff:"Media",art:"Menos es más",q:"¿Qué frase se asocia al lenguaje moderno minimalista?",a:["Menos es más","El arte es sueño","Todo fluye","La belleza salvará"],ok:0,c:["#eeeeee","#111111"]},
  {cat:"Expresionismo abstracto",diff:"Difícil",art:"Dripping",q:"¿Qué artista se asocia con la técnica del dripping?",a:["Jackson Pollock","Mark Rothko","Barnett Newman","Willem de Kooning"],ok:0,c:["#151515","#e6d0a2"]},
  {cat:"Color Field",diff:"Muy difícil",art:"Campos de color",q:"¿Qué pintor creó grandes campos de color meditativos?",a:["Mark Rothko","Pollock","Warhol","Hopper"],ok:0,c:["#8f2037","#2b1745"]},
  {cat:"Realismo americano",diff:"Media",art:"Nighthawks",q:"¿Quién pintó Nighthawks?",a:["Edward Hopper","Grant Wood","Andrew Wyeth","Norman Rockwell"],ok:0,c:["#14334a","#e3c56e"]},
  {cat:"Prerrafaelitas",diff:"Muy difícil",art:"Ofelia",q:"¿Quién pintó Ofelia, una de las obras icónicas prerrafaelitas?",a:["John Everett Millais","Dante Gabriel Rossetti","William Morris","Burne-Jones"],ok:0,c:["#2f6147","#d6c3a2"]},
  {cat:"Arte español",diff:"Muy difícil",art:"Dama de Elche",q:"¿Qué tipo de obra es la Dama de Elche?",a:["Busto íbero","Relieve romano","Mosaico visigodo","Escultura barroca"],ok:0,c:["#c6a36f","#5d4b35"]},
  {cat:"Manga",diff:"Media",art:"Tezuka",q:"¿Qué autor es conocido como el “dios del manga”?",a:["Osamu Tezuka","Hayao Miyazaki","Akira Toriyama","Naoki Urasawa"],ok:0,c:["#101010","#ff477e"]},
  {cat:"Anime",diff:"Difícil",art:"Ghibli",q:"¿Qué estudio produjo El viaje de Chihiro?",a:["Studio Ghibli","Madhouse","Toei Animation","Gainax"],ok:0,c:["#5aa9cf","#84c66a"]},
  {cat:"Cine y arte",diff:"Difícil",art:"Caravaggio en cine",q:"¿Qué recurso visual de Caravaggio se imita mucho en fotografía y cine?",a:["Contrastes extremos de luz y sombra","Puntos Ben-Day","Perspectiva isométrica","Collage tipográfico"],ok:0,c:["#000000","#d88d42"]},
  {cat:"Técnicas",diff:"Difícil",art:"Aguafuerte",q:"¿Qué técnica de grabado usa ácido para morder una plancha metálica?",a:["Aguafuerte","Xilografía","Litografía seca","Temple"],ok:0,c:["#444444","#c9c1aa"]},
  {cat:"Técnicas",diff:"Muy difícil",art:"Temple al huevo",q:"Antes del óleo, ¿qué técnica fue común en tablas medievales y renacentistas?",a:["Temple al huevo","Acrílico industrial","Serigrafía","Spray aerosol"],ok:0,c:["#c29b4a","#fff1c5"]},
  {cat:"Museos",diff:"Difícil",art:"Museo de Orsay",q:"¿Qué tipo de edificio fue originalmente el Museo de Orsay?",a:["Una estación de tren","Un palacio de justicia","Una fábrica textil","Un teatro imperial"],ok:0,c:["#b58e60","#4e6d80"]},
  {cat:"Arquitectura",diff:"Muy difícil",art:"Bauhaus",q:"¿Qué escuela alemana unió arte, diseño y arquitectura moderna?",a:["Bauhaus","Black Mountain College","De Stijl","Secesión de Múnich"],ok:0,c:["#e63946","#f1faee"]},
  {cat:"Arte conceptual",diff:"Difícil",art:"Idea",q:"En el arte conceptual, ¿qué suele primar sobre el objeto final?",a:["La idea","El marco dorado","La pincelada barroca","La imitación anatómica"],ok:0,c:["#2a2a2a","#f2f2f2"]},
  {cat:"Performance",diff:"Difícil",art:"Marina Abramović",q:"¿Qué artista es famosa por performances de resistencia y presencia?",a:["Marina Abramović","Frida Kahlo","Georgia O'Keeffe","Louise Bourgeois"],ok:0,c:["#851f2d","#111111"]},
  {cat:"Mujeres artistas",diff:"Media",art:"Autorretrato",q:"¿Qué artista mexicana es célebre por sus autorretratos simbólicos?",a:["Frida Kahlo","Leonora Carrington","Remedios Varo","Tamara de Lempicka"],ok:0,c:["#1b7a53","#d73745"]},
  {cat:"Surrealismo",diff:"Muy difícil",art:"Remedios Varo",q:"¿Qué artista surrealista española desarrolló gran parte de su obra en México?",a:["Remedios Varo","Sonia Delaunay","Artemisia Gentileschi","Berthe Morisot"],ok:0,c:["#5b3b70","#d9a85f"]},
  {cat:"Barroco",diff:"Muy difícil",art:"Judith",q:"¿Qué pintora barroca representó con fuerza a Judith decapitando a Holofernes?",a:["Artemisia Gentileschi","Sofonisba Anguissola","Lavinia Fontana","Clara Peeters"],ok:0,c:["#7d1424","#d6b384"]},
  {cat:"Naturaleza muerta",diff:"Difícil",art:"Bodegón",q:"¿Qué artista española/flamenca fue pionera del bodegón en el siglo XVII?",a:["Clara Peeters","Berthe Morisot","Rosa Bonheur","Mary Cassatt"],ok:0,c:["#3b2b22","#c9a26a"]}
];

const prizes = [
  {icon:"🏰",title:"Escapada a Segovia",desc:"Viaje de cuento con acueducto, cena especial y paseo de aniversario."},
  {icon:"🌿",title:"Fin de semana en Jaén",desc:"Castillos, aceite bueno, miradores y una noche romántica."},
  {icon:"🏝️",title:"Destino exótico sorpresa",desc:"Una escapada elegida por ella: playa, calorcito y modo desconexión."},
  {icon:"💆‍♀️",title:"Spa para dos",desc:"Circuito termal, masaje y día entero sin preocupaciones."},
  {icon:"🍣",title:"Cena degustación",desc:"Un restaurante bonito con menú largo, brindis y sobremesa infinita."},
  {icon:"🎭",title:"Musical o teatro",desc:"Entradas para una noche de planazo cultural juntos."},
  {icon:"📸",title:"Sesión de fotos",desc:"Una sesión bonita para convertir el aniversario en recuerdo profesional."},
  {icon:"💍",title:"Joyita personalizada",desc:"Un collar, pulsera o anillo grabado con un detalle secreto."},
  {icon:"🎨",title:"Taller creativo",desc:"Cerámica, pintura, perfume o cocina: crear algo juntos."},
  {icon:"🌌",title:"Noche con estrellas",desc:"Hotel rural, manta, cielo limpio y desayuno lento."},
  {icon:"✈️",title:"Vale por viaje libre",desc:"Ella elige destino y tú te encargas de convertirlo en realidad."},
  {icon:"💐",title:"Ramo gigante + carta",desc:"Flores exageradamente bonitas con una carta escrita a mano."}
];

let target = 0, streak = 0, best = Number(localStorage.getItem("artQuestBest") || 0), current = null, locked = false;
const $ = s => document.querySelector(s);
const intro = $("#introScreen"), game = $("#gameScreen"), win = $("#winScreen"), final = $("#finalScreen");
const streakLabel = $("#streakLabel"), bestLabel = $("#bestLabel"), progress = $("#mysteryProgress"), qText = $("#questionText"), answersGrid = $("#answersGrid"), categoryLabel = $("#categoryLabel"), difficultyLabel = $("#difficultyLabel"), artVisual = $("#artVisual"), feedback = $("#feedback");
bestLabel.textContent = best;
function show(screen){[intro,game,win,final].forEach(s=>s.classList.remove("active"));screen.classList.add("active");}
function shuffle(arr){return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);}
function newTarget(){ target = Math.floor(Math.random()*8)+5; }
function startGame(){ streak=0; newTarget(); updateHud(); show(game); nextQuestion(); }
function updateHud(){streakLabel.textContent=streak;best=Math.max(best,streak);localStorage.setItem("artQuestBest",best);bestLabel.textContent=best;progress.style.width=Math.min(96,(streak/target)*100)+"%";}
function nextQuestion(){ locked=false; current = shuffle(questions)[0]; const zipped=current.a.map((text,i)=>({text,ok:i===current.ok})); const ans=shuffle(zipped); categoryLabel.textContent=current.cat; difficultyLabel.textContent=current.diff; qText.textContent=current.q; artVisual.dataset.art=current.art; artVisual.style.setProperty("--c1",current.c?.[0]||"#8148ff"); artVisual.style.setProperty("--c2",current.c?.[1]||"#ff477e"); artVisual.style.setProperty("--x",Math.floor(Math.random()*70+15)+"%"); artVisual.style.setProperty("--y",Math.floor(Math.random()*70+15)+"%"); artVisual.style.setProperty("--r",Math.floor(Math.random()*360)+"deg"); answersGrid.innerHTML=""; ans.forEach(a=>{ const b=document.createElement("button"); b.className="answer-btn"; b.textContent=a.text; b.onclick=()=>answer(b,a.ok); answersGrid.appendChild(b); });}
function pop(text, good=true){feedback.textContent=text;feedback.style.color=good?"var(--good)":"var(--bad)";feedback.classList.remove("show");void feedback.offsetWidth;feedback.classList.add("show");if(navigator.vibrate)navigator.vibrate(good?18:[30,40,30]);}
function answer(btn, ok){ if(locked)return; locked=true; if(ok){ btn.classList.add("correct"); streak++; updateHud(); pop(streak>=target?"OPEN!":"PERFECT!",true); setTimeout(()=>{ if(streak>=target) openPrizes(); else nextQuestion(); },850); } else { btn.classList.add("wrong"); [...answersGrid.children].forEach(b=>{ if(b.textContent===current.a[current.ok]) b.classList.add("correct");}); pop("CRACK!",false); setTimeout(()=>{ streak=0; newTarget(); updateHud(); nextQuestion(); },1150); }}
function openPrizes(){ renderPrizes(); show(win); }
function renderPrizes(){ const grid=$("#prizesGrid"); grid.innerHTML=""; shuffle(prizes).forEach(p=>{ const card=document.createElement("article"); card.className="prize-card"; card.innerHTML=`<div class="prize-icon">${p.icon}</div><h3>${p.title}</h3><p>${p.desc}</p><button class="prize-btn">Elegir premio</button>`; card.querySelector("button").onclick=()=>choosePrize(p); grid.appendChild(card); });}
function choosePrize(p){$("#finalIcon").textContent=p.icon;$("#finalTitle").textContent=p.title;$("#finalDesc").textContent=p.desc;show(final); if(navigator.vibrate)navigator.vibrate([25,45,25,45,25]);}
$("#startBtn").onclick=startGame;$("#restartBtn").onclick=startGame;$("#backPrizesBtn").onclick=()=>show(win);

// Particles
const canvas=$("#artParticles"), ctx=canvas.getContext("2d",{alpha:true}); let W,H,DPR,parts=[]; function resize(){DPR=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;canvas.width=W*DPR;canvas.height=H*DPR;canvas.style.width=W+"px";canvas.style.height=H+"px";ctx.setTransform(DPR,0,0,DPR,0,0);parts=Array.from({length:Math.min(90,Math.max(35,Math.floor(W/14)))},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2+1,v:Math.random()*0.4+0.15,a:Math.random()*0.28+0.12}));} addEventListener("resize",resize);resize();function draw(){ctx.clearRect(0,0,W,H);ctx.globalCompositeOperation="lighter";parts.forEach(p=>{p.y-=p.v;if(p.y<-10){p.y=H+10;p.x=Math.random()*W}ctx.globalAlpha=p.a;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle="rgba(245,196,81,.9)";ctx.fill();});requestAnimationFrame(draw)}draw();
