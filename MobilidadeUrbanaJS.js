function initMap() {
	// Coordenadas dos marcadores
    var myLatLng_Ginasio = { lat: -16.436960802284915, lng:  -51.12668067479016 };
    var myLatLng_IF_Sede = { lat: -16.431642437303914, lng: -51.130258945883085 };
    var MyLatLng_Rodoviaria = { lat: -16.44245676967544, lng: -51.12423796294063 };
    var MyLatLng_PostoMacionil = { lat: -16.452086367179465, lng: -51.115377471601285 };
    var MyLatLng_PostoSaidao = { lat: -16.457279810004582, lng: -51.116490075018554};
    var MyLatLng_BarataoShopping = { lat: -16.447256856015233, lng: -51.11571437642274};
    var MyLatLng_HipermercadoBorjao = { lat: -16.44164892629207, lng: -51.109996267871495};
    var MyLatLng_PostoPetro = { lat: -16.438971116736024, lng: -51.10670911462362};
    var MyLatLng_RotatoriaBuenosAires = { lat: -16.437960055170304, lng: -51.10311132281662};
    var MyLatLng_LanchoneteCenterSuco = { lat: -16.423450359735337, lng: -51.09893725767036};
    var MyLatLng_LanchonetePeDeCafe = { lat: -16.42757020294013, lng: -51.10381280797495};
    var MyLatLng_PostoReal = { lat: -16.43572608139999, lng: -51.11245233593114};
    var MyLatLng_PostoRodocar = { lat: -16.43037937034888, lng: -51.118052183139184};
    var MyLatLng_SupermercadoSuper10 = { lat: -16.423419658836742, lng: -51.11628348003942};
    var MyLatLng_RotatoriaMonteAzul = { lat: -16.415555693457954, lng: -51.11440639761772};
    var MyLatLng_PneusPiloto = { lat: -16.427796167849255, lng: -51.121141742201324};

    //Pontos para fazer o mapa
    var IF_Sede_To_Ginasio1 = { lat: -16.43372748162824, lng: -51.12668681832658};
    var IF_Sede_To_Ginasio2 = { lat: -16.434485200042303, lng: -51.12664703450909};
    var IF_Sede_To_Ginasio3 = { lat: -16.435335585557773, lng: -51.126220779315155};
    var IF_Sede_To_Ginasio4 = { lat: -16.43623502771761, lng: -51.12537963566621};
    
    var Ginasio_To_Rodoviaria = { lat: -16.439135018912896, lng: -51.1284827735317};

    var PostoMacionil_To_PostoSaidao1 = { lat: -16.452856734593038, lng: -51.11464688426264};
    var PostoMacionil_To_PostoSaidao2 = { lat: -16.45304750847854, lng: -51.11481596548698};
    var PostoMacionil_To_PostoSaidao3 = { lat: -16.457318487963967, lng: -51.116672206860876};

    var PostoSaidao_To_BarataoShopping1 = { lat: -16.457246393682897, lng: -51.116580860322216};
    var PostoSaidao_To_BarataoShopping2 = { lat: -16.456294411572806, lng: -51.11605074274027};
    var PostoSaidao_To_BarataoShopping3 = { lat: -16.4541527479912, lng: -51.115073313807414};
    var PostoSaidao_To_BarataoShopping4 = { lat: -16.453061891587325, lng: -51.11475677990476};
    var PostoSaidao_To_BarataoShopping5 = { lat: -16.452885085538323, lng: -51.11456894660394};
    var PostoSaidao_To_BarataoShopping6 = { lat: -16.449591587861292, lng: -51.11796746069427};

    var PostoPetro_To_RotatoriaBuenosAires1 = {lat: -16.43581937586788, lng: -51.10366242305669};

    var viradaBueno1 = { lat: -16.438074942405464, lng: -51.10322075266701};
    var viradaBueno2 = { lat: -16.438260858187697, lng: -51.10317086401752};
    var viradaBueno3 = { lat: -16.438215842925167, lng: -51.10290306608976};
    var viradaBueno1 = { lat: -16.437996062376005, lng: -51.102944478140444};

    var RotatoriaBuenos_To_LanchoneteCenter1= { lat: -16.435492881688976, lng: -51.1035809732973};
    var RotatoriaBuenos_To_LanchoneteCenter2 = { lat: -16.43615544868134, lng: -51.106333897995846};
    var RotatoriaBuenos_To_LanchoneteCenter3 = { lat: -16.436138616029872, lng: -51.10700664107582};
    var RotatoriaBuenos_To_LanchoneteCenter4 = { lat: -16.436306942516765, lng: -51.107796382789815};
    var RotatoriaBuenos_To_LanchoneteCenter5 = { lat: -16.43461806012916, lng: -51.10818247876666};
    var RotatoriaBuenos_To_LanchoneteCenter6 = { lat: -16.43333876404688, lng: -51.109504564895275};

    var PostoReal_To_PostoRodocar1 = { lat: -16.436220260952055, lng: -51.11265474548216};
    
    var PostoRodocar_To_Super10_1 = { lat: -16.428651874143053, lng: -51.116030785263035};
    var PostoRodocar_To_Super10_2 = { lat: -16.425614349422055, lng: -51.11556460768802};
    var PostoRodocar_To_Super10_3 = { lat: -16.424097585231642, lng: -51.11656815848964};

    var Super10_To_RotatoriaMonteAzul = { lat:-16.41734098353084, lng: -51.114434725303695};

    var RotatoriaMonteAzul_To_PneusPiloto1 = { lat: -16.4172774490984, lng: -51.114576227160065};
    var RotatoriaMonteAzul_To_PneusPiloto2 = { lat: -16.42347488132452, lng: -51.11649927604872};

    var PneusPiloto_To_IF_Sede = { lat: -16.432330147034726, lng: -51.12586895056571};
	
    //colocando o maps no site, além de colocar o IF como o centro do mapa
	var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: myLatLng_IF_Sede,
    });
	
	// Conteúdo da InfoWindow para o marcador do IFGoiano - Sede
    var contentString_IF_Sede = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">IFGoiano - Sede </h1>' + 
    '<img src="Fotos/IFGoiano - Sede.jpeg">' +
    '<div id="BodyContest">' + 
        '<p>O Instituo Federal Goiano-Campus Iporá é uma instituição de cursos superiores e cursos' +
        ' integradosao ensino médio</br></br>' +
        '<b>Endereço</b>: Av. Oeste, 350 - Parque União, Iporá - GO, 76200-000</br></br>' +
        '<b>Horário de Saída-Chegada</b>: </br>' + 
        
        '<ul>' +
            '<li>Segunda-Feira: 06:07 - 17:15 </li></br>' + '<li>Terça-Feira: 06:07 - 17:15 </li></br>' +
            '<li>Quarta-feira: 06:07 - 17:15 </li></br>' + '<li>Quinta-Feira: 06:07 - 17:15 </li></br>' +
            '<li>Sexta-Feira: 06:07 - 17:15 </li></br>' + '<li>Sábado: Fechado </li></br>'+ 
            '<li>Domingo: Fechado </li></br></br>'+
        '</ul>' +

        '<b>Telefone: (64) 3603-7216 </b></br>' + 
        'Website: <a href="https://www.ifgoiano.edu.br/home/index.php/ipora">https://www.ifgoiano.edu.br/home/index.php/ipora</a>'
    + '</p>' + '</div>'

    var infowindow_IF_Sede = new google.maps.InfoWindow({
        content: contentString_IF_Sede,
        ariaLabel: "IFGoiano - Sede",
    });
    var marker_IF_Sede = new google.maps.Marker({
        position: myLatLng_IF_Sede,
        map: map,
        title: "IFGoiano - Sede",
    });
    marker_IF_Sede.addListener("click", function () {
        infowindow_IF_Sede.open({
            anchor: marker_IF_Sede,
            map: map,
        });
    });

	// Conteúdo da InfoWindow para o marcador do Ginásio
    var contentString_Ginasio = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Ginásio de Esportes</h1>' +
    '<img src="Fotos/Ginásio.jpeg">' +
    '<div id="BodyContest">' +
        '<p>O Ginásio de Esportes Trancedo de Almeida Neves é um espaço para de praticar esportes, ' +
        'momentos de lazer e recreação, só que para de usar o Ginásio para reservar</br></br>' +
        '<b>Endereço</b>:' + 'Av. Mato Grosso - Vila Padre Cincero, Iporá - GO, 72600-000</br></br>' +
        
        '<b>Horário de Saida-Chegada</b>: ' +

        '<ul>' +
            '<li>Segunda-Feira: 06:10 - 17:55 </li></br>' + '<li>Terça-Feira: 06:10 - 17:55 </li></br>' +
            '<li>Quarta-feira: 06:10 - 17:55 </li></br>' + '<li>Quinta-Feira: 06:10 - 17:55 </li></br>' +
            '<li>Sexta-Feira: 06:10 - 17:55 </li></br>' + '<li>Sábado: Fechado </li></br>'+ 
            '<li>Domingo: Fechado </li></br></br>'+
        '</ul>' +
        
        '<b>Telefone</b>: (64) 3603-7216 </p>' +
    '</div>'

    var infowindow_Ginasio = new google.maps.InfoWindow({
        content: contentString_Ginasio,
        ariaLabel: "Ginásio",
    });

    var marker_Ginasio = new google.maps.Marker({
        position: myLatLng_Ginasio,
        map: map,
        title: "Ginásio",
    });

    marker_Ginasio.addListener("click", function () {
        infowindow_Ginasio.open({
            anchor: marker_Ginasio,
            map: map,
        });
    });


	// Conteúdo da InfoWindow para o marcador do Rodoviária
    var contentString_Rodoviaria = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Terminal Rovoviária de iporá</h1>' +
    '<img src="Fotos/Rodoviária.jpeg">' +
    '<div id="BodyContest">' +
        '<p>O Terminal Rodiviária de Iporá é um local para comprar passagens para viagens de ' +
        'ônibus, há também camelôs para se comprar roupas, brinquedo, entre várias coisas, ' +
        'você também vai poder achar restaurante, lanchonetes e mototáxis</br></br>' +
        '<b>Endereço</b>: Av. 15 de Novembro - St. Central, Iporá - GO, 76200-000</br></br>' +
        
        '<b>Horário de Saida-Chegada</b>:' +
        '<ul>' +
            '<li>Segunda-Feira: 06:14 - 17:51</li>' +
            '<li>Terça-Feira: 06:14 - 17:51</li>' +
            '<li>Quarta-Feira: 06:14 - 17:51</li>' +
            '<li>Quinta-Feira: 06:14 - 17:51</li>' +
            '<li>Sexta-Feira: 06:14 - 17:51</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>' +

        '<b>telefone</b>: Não há telefone </p>'
    '</div>'

    var infowindow_Rodoviaria = new google.maps.InfoWindow({
        content: contentString_Rodoviaria,
        ariaLabel: "Rodoviária",
    });

    var marker_Rodoviaria = new google.maps.Marker({
        position: MyLatLng_Rodoviaria,
        map: map,
        title: "Rodoviária",
    });

    marker_Rodoviaria.addListener("click", function () {
        infowindow_Rodoviaria.open({
            anchor: marker_Rodoviaria,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do PostoMacionil
    var contentString_PostoMacionil = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Auto Posto Macionil</h1>' + 
    '<img src="Fotos/Auto Posto Macionil.jpeg">' +
    '<div id="BodyContest">' +

        '<b>Horário de Saida-Chegada</b>:' +
        '<ul>' +
            '<li>Segunda-Feira: 06:16 - 17:49</li>' +
            '<li>Terça-Feira: 06:16 - 17:49</li>' +
            '<li>Quarta-Feira: 06:16 - 17:49</li>' +
            '<li>Quinta-Feira: 06:16 - 17:49</li>' +
            '<li>Sexta-Feira: 06:16 - 17:49</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>'
         +
        '<b>Endereço</b>: R. Francisco Sáles, QD 7 - LT 20 - CASTANHEIRA, Iporá - GO, 76200-000</br></br>' +
        '<b>Horário de Funcionamento</b>: Aberto 24 horas</br></br>' +
        '<b>Telefone</b>: (64) 3974-1297 </p>' +
        '</div>'

    var infowindow_PostoMacionil = new google.maps.InfoWindow({
        content: contentString_PostoMacionil,
        ariaLabel: "Auto Posto Macionil",
    });

    var marker_PostoMacionil = new google.maps.Marker({
        position: MyLatLng_PostoMacionil,
        map: map,
        title: "Auto Posto Macionil",
    });

    marker_PostoMacionil.addListener("click", function () {
        infowindow_PostoMacionil.open({
            anchor: marker_PostoMacionil,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do PostoSaidao
    var contentString_PostoSaidao = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Auto Posto Saidão</h1>' +
    '<img src="Fotos/Auto Posto Saidão.jpeg">' +
    '<div id="BodyContest">' +
        '<p>A empresa Saidão Auto Posto, localizado no bairro <b>Ary Ribeiro Valadão Filho</b>, '+
        'em Iporá - GO, foi fundada em 2008. A atividade principal da empresa é: ' +
        '<b>Horário de Saida-Chegada</b>:' +
        '<ul>' +
            '<li>Segunda-Feira: 06:19 - 17:46</li>' +
            '<li>Terça-Feira: 06:19 - 17:46</li>' +
            '<li>Quarta-Feira: 06:19 - 17:46</li>' +
            '<li>Quinta-Feira: 06:19 - 17:46</li>' +
            '<li>Sexta-Feira: 06:19 - 17:46</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>'
        '<b>Endereço</b>: Umuarama, Iporá - GO, 76200-000</br></br>' +

        '<b>Horário de Funcionamento</b>: Aberto 24 horas </br></br>' +

        '<b>Telefone</b>: (64) 3603-2000 </p>' +
    '</div>'

    var infowindow_PostoSaidao = new google.maps.InfoWindow({
        content: contentString_PostoSaidao,
        ariaLabel: "Auto Posto Saidão",
    });

    var marker_PostoSaidao = new google.maps.Marker({
        position: MyLatLng_PostoSaidao,
        map: map,
        title: "Auto Posto Saidão",
    });

    marker_PostoSaidao.addListener("click", function () {
        infowindow_PostoSaidao.open({
            anchor: marker_PostoSaidao,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do BarataoShopping
    var contentString_BarataoShopping = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Baratão Shopping</h1>' +
    '<img src="Fotos/Baratão Shopping.jpeg">' +
    '<div id="BodyContest">' +
        '<p><b>Baratão Shopping</b> tem como foco o segmento de supermercado de Iporá. Você pode '+
        'localizá-lo em Avenida Rio Claro, 498 no Bairro <b>Setor Central em Iporá</b></br></br>' +

        '<b>Endereço</b>: Av. Rio Claro, 492 - S Central, Iporá - GO, 76200-000 </br></br>' +

        '<b>Horário de Saida-Chegada</b>:' + ' <ul>' +
            '<li>Segunda-Feira: 06:21 - 17:42</li>' +
            '<li>Terça-Feira: 06:21 - 17:42</li>' +
            '<li>Quarta-Feira: 06:21 - 17:42</li>' +
            '<li>Quinta-Feira: 06:21 - 17:42</li>' +
            '<li>Sexta-Feira: 06:21 - 17:42</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado </li>' +
        '</ul>' +

        '<b>Telefone</b>: (64) 3674-1617 </p>'
    '</div>'

    var infowindow_BarataoShopping = new google.maps.InfoWindow({
        content: contentString_BarataoShopping,
        ariaLabel: "Baratão Shopping",
    });

    var marker_BarataoShopping = new google.maps.Marker({
        position: MyLatLng_BarataoShopping,
        map: map,
        title: "Baratão Shopping",
    });

    marker_BarataoShopping.addListener("click", function () {
        infowindow_BarataoShopping.open({
            anchor: marker_BarataoShopping,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do HipermercadoBorjao
    var contentString_HipermercadoBorjao = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Hipermercado Borjão</h1>' +
    '<img src="Fotos/Hipermercado Borjão.jpeg">' +
    '<div id="BodyContest">' +
        '<p>A Empresa Borjão Hipermercado trabalha na categoria Supermercados na cidade de Iporá</br></br>' +

        '<b>Endereço</b>: Av. Rio Claro, 1441 - Centro, Iporá - GO, 76200-000 </br></br>'+

        '<b>Horário de Saida-Chegada</b>:' + '<ul>' +
            '<li>Segunda-Feira: 06:23 - 17:42</li>' +
            '<li>Terça-Feira: 06:23 - 17:42<</li>' +
            '<li>Quarta-Feira: 06:23 - 17:42<</li>' +
            '<li>Quinta-Feira: 06:23 - 17:42<</li>' +
            '<li>Sexta-Feira: 06:23 - 17:42<</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>' +

        '<b>Telefone</b>: (64) 3674-1772 </p>'
    '</div>'

    var infowindow_HipermercadoBorjao = new google.maps.InfoWindow({
        content: contentString_HipermercadoBorjao,
        ariaLabel: "Hipermercado Borjão",
    });

    var marker_HipermercadoBorjao = new google.maps.Marker({
        position: MyLatLng_HipermercadoBorjao,
        map: map,
        title: "Hipermercado Borjão",
    });

    marker_HipermercadoBorjao.addListener("click", function () {
        infowindow_HipermercadoBorjao.open({
            anchor: marker_HipermercadoBorjao,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do PostoPetro
    var contentString_PostoPetro = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Auto Posto Petro Iporá</h1>' +
    '<img src="Fotos/Auto Posto Petro Ipo.jpeg">' +
    '<div id="BodyContest">' +
        '<p>A empresa Petroipo Auto Posto, localizada no bairro <b>Vila Brasilia</b>, '+
        'em Iporá-GO foi fundada em 2019.'+

        '<b>Horário de Saida-Chegada</b>:' +
        '<ul>' +
            '<li>Segunda-Feira: 06:25 - 17:40</li>' +
            '<li>Terça-Feira: 06:25 - 17:40</li>' +
            '<li>Quarta-Feira: 06:25 - 17:40</li>' +
            '<li>Quinta-Feira: 06:25 - 17:40</li>' +
            '<li>Sexta-Feira: 06:25 - 17:40</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>'

        '<b>Endereço</b>: R. 3, 49 - 1 - Vila Itajuba, Iporá - GO, 76200-000 </br></br>' +

        '<b>Horário de Funcionamento</b>: Aberto 24 horas </br></br>' +
        
        '<b>Telefone</b>: (54) 3674-2365 </p>'
    '</div>'

    var infowindow_PostoPetro = new google.maps.InfoWindow({
        content: contentString_PostoPetro,
        ariaLabel: "Auto Posto Petro Ipo",
    });

    var marker_PostoPetro = new google.maps.Marker({
        position: MyLatLng_PostoPetro,
        map: map,
        title: "Auto Posto Petro Ipo",
    });

    marker_PostoPetro.addListener("click", function () {
        infowindow_PostoPetro.open({
            anchor: marker_PostoPetro,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do RotatoriaBuenosAires
    var contentString_RotatoriaBuenosAires = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Rotátoria Buenos Aires</h1>' +
    '<img src="Fotos/Rotatória Buenos Aires.jpeg">' +
    '<div id="BodyContest">' +
        '<p><b>Rotatória Buenos Aires</b>: Rotatória que fica na bairro <b>Vila brasílias</b> </p>' +
    '</div>'+

    '<b>Horário de Saida-Chegada</b>:' +
        '<ul>' +
            '<li>Segunda-Feira: 06:30 - 17:35</li>' +
            '<li>Terça-Feira: 06:30 - 17:35</li>' +
            '<li>Quarta-Feira: 06:30 - 17:35</li>' +
            '<li>Quinta-Feira: 06:30 - 17:35</li>' +
            '<li>Sexta-Feira: 06:30 - 17:35</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>' 

    var infowindow_RotatoriaBuenosAires = new google.maps.InfoWindow({
        content: contentString_RotatoriaBuenosAires,
        ariaLabel: "Rotatória Buenos Aires",
    });

    var marker_RotatoriaBuenosAires = new google.maps.Marker({
        position: MyLatLng_RotatoriaBuenosAires,
        map: map,
        title: "Rotatória Buenos Aires",
    });

    marker_RotatoriaBuenosAires.addListener("click", function () {
        infowindow_RotatoriaBuenosAires.open({
            anchor: marker_RotatoriaBuenosAires,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do LanchoneteCenterSuco
    var contentString_LanchoneteCenterSuco = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Lanchonete Center Suco</h1>' +
    '<img src="Fotos/Lachonete Center Suco.jpeg">' +
    '<div id="BodyContest">' +
        '<p>A empresa Churrascaria e Lanchonete Center Suco está permanentemente fechada. </br></br>' +
        
        '<b>Horário de Saida-Chegada</b>:' +
        '<ul>' +
            '<li>Segunda-Feira: 06:32 - 17:33</li>' +
            '<li>Terça-Feira: 06:32 - 17:33</li>' +
            '<li>Quarta-Feira: 06:32 - 17:33</li>' +
            '<li>Quinta-Feira: 06:32 - 17:33</li>' +
            '<li>Sexta-Feira: 06:32 - 17:33</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>'

        '<b>Endereço</b>: 5418, Av. Pará, 5220 - Parque das Estrelas, Iporá - GO, 76200-000 </p>' +
    '</div>'

    var infowindow_LanchoneteCenterSuco = new google.maps.InfoWindow({
        content: contentString_LanchoneteCenterSuco,
        ariaLabel: "Lanchonete Center Suco",
    });

    var marker_LanchoneteCenterSuco = new google.maps.Marker({
        position: MyLatLng_LanchoneteCenterSuco,
        map: map,
        title: "Lanchonete Center Suco",
    });

    marker_LanchoneteCenterSuco.addListener("click", function () {
        infowindow_LanchoneteCenterSuco.open({
            anchor: marker_LanchoneteCenterSuco,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do LanchonetePeDeCafe
    var contentString_LanchonetePeDeCafe = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Lanchonete Pé de Café</h1>' +
    '<img src="Fotos/Lachonete Pé de Café.jpeg">' +
    '<div id="BodyContest">' +
        '<p>A empresa foi fundada há 8 anos em 18/08/2014. Localizada em Ipora / GO, a empresa é uma '+
        '<b>Matriz do tipo Empresa Individual de Responsabilidade Limitada (de Natureza Empresária) '+
        'de porte "Micro Empresa"</b> e atualmente encontra-se BAIXADA na <b>Receita Federal</b>. </br>' +

        '<b>Endereço</b>: Av. Pará, 2761 - Jardim Monte Alto, Iporá - GO, 76200-000 </br></br>'+

        '<b>Horário de Saida-Chegada</b>:' + '<ul>' +
            '<li>Segunda-Feira: 6:34 - 17:31</li>' +
            '<li>Terça-Feira: 6:34 - 17:31</li>' +
            '<li>Quarta-Feira: 6:34 - 17:31</li>' +
            '<li>Quinta-Feira: 6:34 - 17:31</li>' +
            '<li>Sexta-Feira: 6:34 - 17:31</li>' +
            '<li>Sábado: 6:34 - 17:31</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>' +

        '<b>Telefone</b>: (64) 99960-0121 <p>' +
    '</div>'

    var infowindow_LanchonetePeDeCafe = new google.maps.InfoWindow({
        content: contentString_LanchonetePeDeCafe,
        ariaLabel: "Lanchonete Pé De Café",
    });

    var marker_LanchonetePeDeCafe = new google.maps.Marker({
        position: MyLatLng_LanchonetePeDeCafe,
        map: map,
        title: "Lanchonete Pé De Café",
    });

    marker_LanchonetePeDeCafe.addListener("click", function () {
        infowindow_LanchonetePeDeCafe.open({
            anchor: marker_LanchonetePeDeCafe,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do PostoReal
    var contentString_PostoReal = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Auto Posto Real</h1>' +
    '<img src="Fotos/Auto Posto Real.jpeg">' +
    '<div id="BodyContest">' +
        '<p>O Auto Posto Real conta com uma completa infraestrutura, além do combustível'+
        ' Petrobras e da troca de óleo, tem também lanchonete, churrascaria e hotel e o '+
        'atendimento além de ser personalizado é vinte e quatro horas.</br></br>' +

        '<b>Endereço</b>: Av. Pará, 1461 - St. Planalto, Iporá - GO, 76200-000 </br></br>' +

        '<b>Horário de Saida-Chegada</b>:' +
        '<ul>' +
            '<li>Segunda-Feira: 06:37 - 17:28</li>' +
            '<li>Terça-Feira: 06:37 - 17:28</li>' +
            '<li>Quarta-Feira: 06:37 - 17:28</li>' +
            '<li>Quinta-Feira: 06:37 - 17:28</li>' +
            '<li>Sexta-Feira: 06:37 - 17:28</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>'

        '<b>Telefone</b>: (64) 3674-1581 </p>' +
    '</div>'

    var infowindow_PostoReal = new google.maps.InfoWindow({
        content: contentString_PostoReal,
        ariaLabel: "Auto Posto Real",
    });

    var marker_PostoReal = new google.maps.Marker({
        position: MyLatLng_PostoReal,
        map: map,
        title: "Auto Posto Real",
    });

    marker_PostoReal.addListener("click", function () {
        infowindow_PostoReal.open({
            anchor: marker_PostoReal,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do PostoRodocar
    var contentString_PostoRodocar = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Auto Posto Rodocar</h1>' +
    '<img src="Fotos/Auto Posto Rodocar.jpeg">' +
    '<div id="BodyContest">' +
        '<p>A empresa Rodocar Auto Posto que tem como razão social Rodocar Auto Posto Eireli '+
        'foi fundada em <b>05/04/2005</b> e está cadastrada na Solutudo no <b>segmento de Postos'+
        ' e Conveniências</b>... </br>'+
        'A empresa Rodocar Auto Posto está cadastrada na Receita Federal sob o CNAE 4731-8/00 com'+
        ' atividade fim de <b>Comércio Varejista De Combustíveis Para Veículos Automotores</b>. </br></br>' +

        '<b>Endereço</b>: Av. Min. João Alberto, 736 - Centro, Barra do Garças - MT, 78600-000 </br></br>' +

        '<b>Horário de Saida-Chegada</b>:' +
        '<ul>' +
            '<li>Segunda-Feira: 06:39 - 17:26</li>' +
            '<li>Terça-Feira: 06:39 - 17:26</li>' +
            '<li>Quarta-Feira: 06:39 - 17:26</li>' +
            '<li>Quinta-Feira: 06:39 - 17:26</li>' +
            '<li>Sexta-Feira: 06:39 - 17:26</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>'

        '<b>Telefone</b>: (66) 3401-5369 </p>' +
    '</div>'

    var infowindow_PostoRodocar = new google.maps.InfoWindow({
        content: contentString_PostoRodocar,
        ariaLabel: "Auto Posto Rodocar",
    });

    var marker_PostoRodocar = new google.maps.Marker({
        position: MyLatLng_PostoRodocar,
        map: map,
        title: "Auto Posto Rodocar",
    });

    marker_PostoRodocar.addListener("click", function () {
        infowindow_PostoRodocar.open({
            anchor: marker_PostoRodocar,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do SupermercadoSuper10
    var contentString_SupermercadoSuper10 = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Supermercado Super 10</h1>' +
    '<img src="Fotos/Supermercado Super 10.jpeg">' +
    '<div id="BodyContest">' +


        '<b>Endereço</b>: Q1, L2, Av. Monte Azul - Jardim Novo Horizonte, Iporá - GO, 76200-000 </br></br>'+
        '<b>Horário de Saida-Chegada</b>:' +
        '<ul>' +
            '<li>Segunda-Feira: 06:42 - 17:23</li>' +
            '<li>Terça-Feira: 06:42 - 17:23</li>' +
            '<li>Quarta-Feira: 06:42 - 17:23</li>' +
            '<li>Quinta-Feira: 06:42 - 17:23</li>' +
            '<li>Sexta-Feira: 06:42 - 17:23</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>'

        '<b>Telefone</b>: (64) 3674-6198 </p>'+
    '</div>'
 
    var infowindow_SupermercadoSuper10 = new google.maps.InfoWindow({
        content: contentString_SupermercadoSuper10,
        ariaLabel: "Supermercado Super 10",
    });

    var marker_SupermercadoSuper10 = new google.maps.Marker({
        position: MyLatLng_SupermercadoSuper10,
        map: map,
        title: "Supermercado Super 10",
    });

    marker_SupermercadoSuper10.addListener("click", function () {
        infowindow_SupermercadoSuper10.open({
            anchor: marker_SupermercadoSuper10,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do RotatoriaMonteAzul
    var contentString_RotatoriaMonteAzul = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Rotatória Monte Azul</h1>' +
    '<img src="Fotos/Rotatória Monte Azul.jpeg">' +
    '<div id="BodyContest">' +
        '<p> <b>Endereço</b>:Avenida Monte Azul Jardim Novo Horizont III Ipora, GO </p>' +
    '</div>'+

    '<b>Horário de Saida-Chegada</b>:' +
        '<ul>' +
            '<li>Segunda-Feira: 06:45 - 17:20</li>' +
            '<li>Terça-Feira: 06:45 - 17:20</li>' +
            '<li>Quarta-Feira: 06:45 - 17:20</li>' +
            '<li>Quinta-Feira: 06:45 - 17:20</li>' +
            '<li>Sexta-Feira: 06:45 - 17:20</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>'
    var infowindow_RotatoriaMonteAzul = new google.maps.InfoWindow({
        content: contentString_RotatoriaMonteAzul,
        ariaLabel: "Rotatória Monte Azul",
    });

    var marker_RotatoriaMonteAzul = new google.maps.Marker({
        position: MyLatLng_RotatoriaMonteAzul,
        map: map,
        title: "Rotatória Monte Azul",
    });

    marker_RotatoriaMonteAzul.addListener("click", function () {
        infowindow_RotatoriaMonteAzul.open({
            anchor: marker_RotatoriaMonteAzul,
            map: map,
        });
    });

    // Conteúdo da InfoWindow para o marcador do PneusPiloto
    var contentString_PneusPiloto = '<div id="content">' + '<div id="siteNotice">' + '</div>' +
    '<h1 id="firstHeading">Auto Center Pneus Piloto</h1>' +
    '<img src="Fotos/Pneus Piloto.jpeg">' +
    '<div id="BodyContest">' +
        '<p>A empresa Gilmar Auto Center que tem como razão social <b>Amf Centro Automotivo Ltda.</b>'+
        ' foi fundada em <b>18/08/2017</b> e a empresa Gilmar Auto Center está cadastrada na '+
        '<b>Receita Federal</b> sob o <b>CNAE 4530-7/05</b> com atividade: '+
        '<ul>'+
            '<li>Solutudo no segmento de Rodas - Pneus</li>'+
            '<li>Comércio A Varejo De Pneumáticos E Câmaras De Ar</li>' +
        '</ul>' +

        '<b>Endereço</b>: Av: R2, n 711, Bairro - Mato Grosso, Iporá - GO, 76200-000 </br></br>'+

        '<b>Horário de Saida-Chegada</b>:' +
        '<ul>' +
            '<li>Segunda-Feira: 06:49 - 17:16</li>' +
            '<li>Terça-Feira: 06:49 - 17:16</li>' +
            '<li>Quarta-Feira: 06:49 - 17:16</li>' +
            '<li>Quinta-Feira: 06:49 - 17:16</li>' +
            '<li>Sexta-Feira: 06:49 - 17:16</li>' +
            '<li>Sábado: Fechado</li>' +
            '<li>Domingo: Fechado</li>' +
        '</ul>'

        '<b>Telefone</b>: (64) 3603-2875 </p>'+
    '</div>'

    var infowindow_PneusPiloto = new google.maps.InfoWindow({
        content: contentString_PneusPiloto,
        ariaLabel: "Auto Center Pneus Piloto",
    });

    var marker_PneusPiloto = new google.maps.Marker({
        position: MyLatLng_PneusPiloto,
        map: map,
        title: "Auto Center Pneus Piloto",
    });

    marker_PneusPiloto.addListener("click", function () {
        infowindow_PneusPiloto.open({
            anchor: marker_PneusPiloto,
            map: map,
        });
    });

    const poly = new google.maps.Polyline({
        path: [myLatLng_IF_Sede, IF_Sede_To_Ginasio1, IF_Sede_To_Ginasio2, IF_Sede_To_Ginasio3,
        IF_Sede_To_Ginasio4, myLatLng_Ginasio, Ginasio_To_Rodoviaria, MyLatLng_Rodoviaria,
        MyLatLng_PostoMacionil, PostoMacionil_To_PostoSaidao1, PostoMacionil_To_PostoSaidao2,
        PostoMacionil_To_PostoSaidao3, MyLatLng_PostoSaidao, PostoSaidao_To_BarataoShopping1,
        PostoSaidao_To_BarataoShopping2, PostoSaidao_To_BarataoShopping3, PostoSaidao_To_BarataoShopping4,
        PostoSaidao_To_BarataoShopping5, PostoSaidao_To_BarataoShopping6, MyLatLng_BarataoShopping,
        MyLatLng_HipermercadoBorjao, MyLatLng_PostoPetro, PostoPetro_To_RotatoriaBuenosAires1,
        MyLatLng_RotatoriaBuenosAires, viradaBueno1, viradaBueno2, viradaBueno3,
        RotatoriaBuenos_To_LanchoneteCenter1, RotatoriaBuenos_To_LanchoneteCenter2,
        RotatoriaBuenos_To_LanchoneteCenter3, RotatoriaBuenos_To_LanchoneteCenter4,
        RotatoriaBuenos_To_LanchoneteCenter5, RotatoriaBuenos_To_LanchoneteCenter6,
        MyLatLng_LanchoneteCenterSuco, MyLatLng_LanchonetePeDeCafe, MyLatLng_PostoReal,
        PostoReal_To_PostoRodocar1, MyLatLng_PostoRodocar, PostoRodocar_To_Super10_1,
        PostoRodocar_To_Super10_2, PostoRodocar_To_Super10_3, MyLatLng_SupermercadoSuper10,
        Super10_To_RotatoriaMonteAzul, MyLatLng_RotatoriaMonteAzul, RotatoriaMonteAzul_To_PneusPiloto1,
        RotatoriaMonteAzul_To_PneusPiloto2, MyLatLng_PneusPiloto, PneusPiloto_To_IF_Sede, myLatLng_IF_Sede],
        strokeColor: '#FF0000',
        strokeWeight: 5,
        strokeOpacity: 1,
    });

    poly.setMap(map);
}
window.initMap = initMap;