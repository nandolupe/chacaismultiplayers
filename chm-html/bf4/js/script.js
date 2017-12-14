var modulo = angular.module("mainModule", []);

modulo.controller("mainController",function($scope, $http, jsonFilter) {
	$scope.isAvailable = false;
	
	var messagesDefault = {
		title:"[CHM] - CHACAIS MULTIPLAYERS",
		clan : {
			nome : "CHACAIS MULTIPLAYERS",
			tag: "[CHM]"
		},
		apresentacao : "Família Chacais Multiplayers, seja bem vindo a nossa matilha!",
		menu : {
			faca_parte: "Faça Parte",
			games: "Games",
			sobre: "Sobre",
			contato: "Contato"
		},
		link : {
			youtube : "https://www.youtube.com/channel/UCYgDUHD-_zBmTgw94q-2QIA",
			facebook : "http://www.facebook.com/chacaismultiplayers",
			gmail : "chacaismultiplayers@gmail.com",
			battlelog : "http://battlelog.battlefield.com",
			xboxlive: "https://account.xbox.com"
		},
		copyright: "Copyright Chacais Multiplayers 2016"
	};
	
	$scope.message = messagesDefault;
	
	var tipoServidor = {
		8388608 : {name: "Air Superiority", tipoServidorPtBr: "Superioridade Aérea"},
		524288 : {name: "Capture the Flag", tipoServidorPtBr: "Capture a Bandeira"},
		134217728 : {name: "Carrier Assault", tipoServidorPtBr: "Ataque ao Navio: Pequeno"},
		67108864 : {name: "Carrier Assault Large", tipoServidorPtBr: "Ataque ao Navio: Grande"},
		34359738368 : {name: "Chain Link", tipoServidorPtBr: "Corrente"},
		1 : {name: "Conquest", tipoServidorPtBr: "Conquista: Pequena"},
		64 : {name: "Conquest Large", tipoServidorPtBr: "Conquista: Grande"},
		16777216 : {name: "Defuse", tipoServidorPtBr: "Desativação"},
		1024 : {name: "Domination", tipoServidorPtBr: "Dominação"},
		512 : {name: "Gun Master", tipoServidorPtBr: "Metre das Armas"},
		2097152 : {name: "Obliteration", tipoServidorPtBr: "Obliteração"},
		2 : {name: "Rush", tipoServidorPtBr: "Investida"},
		8 : {name: "Squad Deathmatch", tipoServidorPtBr: "Cada Pelotão por Si"},
		137438953472 : {name: "Squad Obliteration", tipoServidorPtBr: "Obliteração em Pelotão"},
		32 : {name: "Team Deathmatch", tipoServidorPtBr: "Cada Equipe por Si"},
		33554432 : {name: "Carrier Assault", tipoServidorPtBr: "Ataque ao Navio: Pequeno"},
		68719476736 : {name: "Conquest", tipoServidorPtBr: "Conquista"},
		2097152 : {name: "Obliteration", tipoServidorPtBr: "Obliteração"},
		524288 : {name: "Capture the Flag", tipoServidorPtBr: "Capture a Bandeira"}
	};

	var mapas = {
		// vanilla
		mp_tremors : {nameMap: "Dawnbreaker", nameMapPtBr: "Raiar do Sol"},
		mp_flooded : {nameMap: "Flood Zone", nameMapPtBr: "Área Inundada"},
		mp_journey : {nameMap: "Golmud Railway", nameMapPtBr: "Ferrovia Golmud"},
		mp_resort : {nameMap: "Hainan Resort", nameMapPtBr: "Retiro em Hainan"},
		mp_damage : {nameMap: "Lancang Dam", nameMapPtBr: "Represa Lancang"},
		mp_prison : {nameMap: "Operation Locker", nameMapPtBr: "Operação Locker"},
		mp_naval : {nameMap: "Paracel Storm", nameMapPtBr: "Tormenta em Paracel"},
		mp_thedish : {nameMap: "Rouge Transmisson", nameMapPtBr: "Transmissão Pirata"},
		mp_siege : {nameMap: "Siege of Shanghai", nameMapPtBr: "Cerco a Xangai"},
		mp_abandoned : {nameMap: "Zavod 311", nameMapPtBr: "Zavod 311"},

		// China Rising
		xp1_001 : {nameMap: "Silk Road", nameMapPtBr: "Rota da Seda"},
		xp1_002 : {nameMap: "Altai Range", nameMapPtBr: "Montanhas Altai"},
		xp1_003 : {nameMap: "Guilin Peaks", nameMapPtBr: "Serra de Guilin"}, 
		xp1_004 : {nameMap: "Dragon Pass", nameMapPtBr: "Desfilad. Dragão"},

		// Second Assault
		xp0_caspian : {nameMap: "Caspain Border", nameMapPtBr: "Fronteira Caspiana 2014"},
		xp0_oman : {nameMap: "Gulf of Oman", nameMapPtBr: "Golfo de Omã 2014"},
		xp0_firestorm : {nameMap: "Operation Firestorm", nameMapPtBr: "Operação Firestorm 2014"},
		mp_012_firestorm : {nameMap: "Operation Firestorm", nameMapPtBr: "Operação Firestorm 2014"},
		xp0_metro : {nameMap: "Operation Metro", nameMapPtBr: "Operação Metrô 2014"},

		// Naval Strike
		xp2_001 : {nameMap: "Lost Islands", nameMapPtBr: "Ilhas Perdidas"},
		xp2_002 : {nameMap: "Nansha Strike", nameMapPtBr: "Ataque a Nansha"},
		xp2_003 : {nameMap: "Wave Breaker", nameMapPtBr: "Quebra Ondas"},
		xp2_004 : {nameMap: "Operation Mortar", nameMapPtBr: "Operação Morteiro"},

		// Dragon's Teeth
		xp3_urbangdn : {nameMap: "Lumphini Garden", nameMapPtBr: "Jardim Lumphini"},
		xp3_marketpl : {nameMap: "Pearl Market", nameMapPtBr: "Mercado de Pérolas"},
		xp3_prpganda : {nameMap: "Propaganda", nameMapPtBr: "Propaganda"},
		xp3_wtrfront : {nameMap: "Sunken Dragon", nameMapPtBr: "Dragão Submerso"},

		// Final Stand
		xp4_wlkrftry : {nameMap: "Giants of Karelia", nameMapPtBr: "Gigantes de Karelia"},
		xp4_subbase : {nameMap: "Hammerhead", nameMapPtBr: "Cabeça de Martelo"},
		xp4_titan : {nameMap: "Hangar 21", nameMapPtBr: "Hangar 21"},
		xp4_arctic : {nameMap: "Operation Whiteout", nameMapPtBr: "Operação Branco Total"},

		// Additional, free DLCs - night map, CMP, Dragon Valley
		// and everything that goes after
		xp5_night_01 : {nameMap: "Zavod: Graveyard Shift", nameMapPtBr: "Zavood: Turno da Noite"},
		xp6_cmp : {nameMap: "Operation Outbreak", nameMapPtBr: "Operação Surto"},
		xp7_valley : {nameMap: "Dragon Valley 2015", nameMapPtBr: "Vale do Dragão 2015"}
	};
	
	var presetMap = {
		1: "Normal",
		2: "Hardcore",			
		4: "Infantry Only",
		8: "Custom",
		32: "Classic"
	}
	
	var regionMap = {
		1: "North America",
		2: "South America",
		4: "Antarctica",
		8: "Africa",
		16: "Europe",
		32: "Asia",
		64: "Oceania"	
	}
	
	var gameExpansions = {
		0: "Vanilla",
		1048576: "China Rising",
		524288: "Second Assault",
		2097152: "Naval Strike",
		4194304: "Dragon's Teeth",
		8388608: "Final Stand",
		268435456: "Night Operations",
		8589934592: "Community Operations",
		17179869184: "Legacy Operations"
	}
	
	// personaId dos membros do clan
	var idsMembro = {
		1721151215: {gamerTag: "CartadaNET", nome: "Alan"},
		979746626: {gamerTag: "M3rc3naryGunn3r", nome: "Luiz"},
		774488176: {gamerTag: "Mr PiGleT Br", nome: "Eduardo"},
		957719232: {gamerTag: "B4PH0M3Ts", nome: "Jose Duarte"}
	};
	
	$scope.buscarTipoServidor = function(tipoId) {
		return tipoServidor[tipoId].tipoServidorPtBr;
	};

	$scope.buscarMapa = function(mapId) {
		return mapas[mapId.toLocaleLowerCase()].nameMapPtBr;
	};
	
	$scope.isCHM = function(personaId) {
		return idsMembro[personaId] != null;
	};
	
	$scope.getGameExpansions = function(idExpansion) {
		return gameExpansions[idExpansion];
	};
});