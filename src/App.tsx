import React from 'react';
import './App.css';
import {useState} from 'react';
import './data';
import {Data} from "./data";


interface AirportPropsTypes {
    name: string;
    gpsCode: string;
    municipality: string;
    code: string;
    image: string;
    lat: number;
    long: number;
}

const data = [{"id":"3a967b87-5471-4a4c-9d0b-37341da32b3a","name":"Arugam Bay SPB","gpsCode":null,"municipality":"Pottuvil","code":"UKLH","long":112.3665609,"lat":-6.9669184,"elevation":null,"image":"http://dummyimage.com/250x243.png/5fa2dd/ffffff"},
    {"id":"c61ade86-a9cc-465e-861d-4c22d8fbcf9f","name":"Namatanai Airport","gpsCode":"AYNX","municipality":"Namatanai","code":"VAUD","long":96.7524103,"lat":5.23113,"elevation":"150","image":"http://dummyimage.com/201x232.png/cc0000/ffffff"},
    {"id":"4bc099cd-bf80-4766-a5d8-184d1600f3a5","name":null,"gpsCode":"EIDW","municipality":"Dublin","code":null,"long":26.3308478,"lat":-30.9970748,"elevation":"242","image":"http://dummyimage.com/224x201.png/dddddd/000000"},
    {"id":"3cd0aee6-2f63-4671-8701-8103c4791f38","name":"Garuahi Airport","gpsCode":null,"municipality":"Garuahi","code":"AYTW","long":6.0796844,"lat":46.1468572,"elevation":"50","image":"http://dummyimage.com/227x215.png/cc0000/ffffff"},
    {"id":"1535af0d-5e8b-4790-806e-6414a103d01e","name":"Belo sur Tsiribihina Airport","gpsCode":"FMML","municipality":"Belo sur Tsiribihina","code":"USPP","long":-99.1476908,"lat":19.3803931,"elevation":"154","image":"http://dummyimage.com/215x243.png/cc0000/ffffff"},
    {"id":"02f97121-f926-45af-82a0-ef245c0e7bc8","name":"Maota Airport","gpsCode":"NSMA","municipality":"Maota","code":"WIOO","long":43.3264539,"lat":43.7041519,"elevation":null,"image":"http://dummyimage.com/206x206.png/dddddd/000000"},
    {"id":"f46d8b17-f9d6-4b93-ad1b-2ae78fdbf3b9","name":"Sentani International Airport","gpsCode":"WAJJ","municipality":"Jayapura-Papua Island","code":"KGLE","long":16.101507,"lat":50.2609615,"elevation":"289","image":"http://dummyimage.com/201x234.png/cc0000/ffffff"},
    {"id":"718df3fd-66d0-49ee-8718-df5ed6a6f5ec","name":"Praia International Airport","gpsCode":"GVNP","municipality":"Praia","code":"78WA","long":121.0126662,"lat":15.6662632,"elevation":"230","image":"http://dummyimage.com/202x221.png/dddddd/000000"},
    {"id":"032955f2-ff24-4a8f-84f6-f368f12c2cb1","name":"Ch??teauroux-D??ols \"Marcel Dassault\" Airport","gpsCode":"LFLX","municipality":"Ch??teauroux/D??ols","code":"AYGS","long":120.4557309,"lat":17.1056791,"elevation":"529","image":"http://dummyimage.com/240x203.png/ff4444/ffffff"},
    {"id":"337048ea-92ca-4dbe-ba5b-ff979445710d","name":null,"gpsCode":"FQMP","municipality":"Moc??mboa da Praia","code":null,"long":122.372516,"lat":37.251388,"elevation":"89","image":"http://dummyimage.com/231x202.png/ff4444/ffffff"},
    {"id":"a1f177e8-3e05-4522-8f61-442e96945289","name":"Zafer Airport","gpsCode":"LTBZ","municipality":"Alt??nta??","code":null,"long":42.5044843,"lat":42.0889602,"elevation":"3327","image":"http://dummyimage.com/233x225.png/5fa2dd/ffffff"},
    {"id":"cd2156b9-be58-4356-b384-159f59c5b8e0","name":"Ngau Airport","gpsCode":"NFNG","municipality":"Ngau","code":"YUSL","long":-8.1656088,"lat":41.3121037,"elevation":"50","image":"http://dummyimage.com/229x247.png/dddddd/000000"},
    {"id":"4f114712-ce09-4b45-8da9-c83a7b1667f0","name":"Labuan Airport","gpsCode":"WBKL","municipality":"Labuan","code":"DAAV","long":12.9683864,"lat":58.2609408,"elevation":"101","image":"http://dummyimage.com/241x240.png/dddddd/000000"},
    {"id":"a44e4af0-a97a-44bb-be59-71902a6cb3db","name":"Bhagatanwala Airport","gpsCode":"OPBG","municipality":"Bhagatanwala","code":"EPWR","long":15.7110481,"lat":45.8010928,"elevation":"600","image":"http://dummyimage.com/242x236.png/cc0000/ffffff"},
    {"id":"8fd5f151-69af-4743-88cc-a7739f8be921","name":null,"gpsCode":"EDXO","municipality":"Sankt Peter-Ording","code":null,"long":-72.1756733,"lat":-13.945728,"elevation":"7","image":"http://dummyimage.com/235x221.png/5fa2dd/ffffff"},
    {"id":"d0d2b78f-8315-4edd-ac57-bb8860b40c56","name":null,"gpsCode":"RPVE","municipality":"Malay","code":null,"long":117.666466,"lat":39.315813,"elevation":"7","image":"http://dummyimage.com/205x209.png/5fa2dd/ffffff"},
    {"id":"16bbd150-9d0f-4f02-83dc-ca9dbbce080e","name":"Cape Flattery Airport","gpsCode":"YCFL","municipality":null,"code":"KQA","long":94.571633,"lat":56.1114024,"elevation":"3609","image":"http://dummyimage.com/209x206.png/dddddd/000000"},
    {"id":"aafad1c8-11ba-4757-9919-d925486958ef","name":"Mekambo Airport","gpsCode":"FOOE","municipality":"Mekambo","code":"FBMN","long":-72.4494848,"lat":6.0102236,"elevation":"1686","image":"http://dummyimage.com/222x221.png/cc0000/ffffff"},
    {"id":"d9c73629-3264-42d8-82c6-f81a7fea67f2","name":"Brown Field Municipal Airport","gpsCode":"KSDM","municipality":"San Diego","code":"KTCC","long":-60.0485206,"lat":-26.9272107,"elevation":"526","image":"http://dummyimage.com/208x208.png/cc0000/ffffff"},
    {"id":"b92408cf-baa0-4b12-90b7-c9236a0e0d04","name":"Albuquerque International Sunport","gpsCode":"KABQ","municipality":"Albuquerque","code":"EGKR","long":112.7196817,"lat":-7.2719005,"elevation":"5355","image":"http://dummyimage.com/211x201.png/dddddd/000000"},
    {"id":"75cacdc1-6871-436a-ad3d-850536e4fb50","name":null,"gpsCode":"DBBB","municipality":"Cotonou","code":null,"long":102.527197,"lat":24.347324,"elevation":"19","image":"http://dummyimage.com/217x215.png/cc0000/ffffff"},
    {"id":"544d695b-a847-4922-aa8b-289683fc5bf6","name":"Palacios Municipal Airport","gpsCode":"KPSX","municipality":"Palacios","code":"NTTX","long":52.9599661,"lat":28.3559058,"elevation":"14","image":"http://dummyimage.com/231x219.png/ff4444/ffffff"},
    {"id":"52e80524-a6c2-43b7-bb6c-a46c0fa9daab","name":null,"gpsCode":"KMGJ","municipality":"Montgomery","code":null,"long":120.2512222,"lat":29.0654415,"elevation":"364","image":"http://dummyimage.com/239x235.png/cc0000/ffffff"},
    {"id":"a81a1723-9bf5-487d-ac35-0d4e47deb19f","name":"Taiping (Tekah) Airport","gpsCode":"WMBI","municipality":"Taiping","code":"RKJB","long":113.39277,"lat":22.517585,"elevation":"40","image":"http://dummyimage.com/216x204.png/cc0000/ffffff"},
    {"id":"b63e17c3-2083-4c80-8bbd-d64712255d73","name":null,"gpsCode":"SDJL","municipality":"Jales","code":null,"long":5.868937,"lat":45.644535,"elevation":"1496","image":"http://dummyimage.com/232x232.png/ff4444/ffffff"},
    {"id":"3c8471a4-817d-45fa-b144-c60564615377","name":"Simberi Airport","gpsCode":"AYSE","municipality":"Simberi Island","code":"KMTN","long":11.814933,"lat":57.7550378,"elevation":"10","image":"http://dummyimage.com/208x217.png/5fa2dd/ffffff"},
    {"id":"877a8490-6b38-41d4-9c66-a3264fb2410e","name":null,"gpsCode":"SVSP","municipality":"San Felipe","code":null,"long":118.296139,"lat":25.448371,"elevation":"761","image":"http://dummyimage.com/238x214.png/cc0000/ffffff"},
    {"id":"5633d9f5-dc51-42a5-ae93-d1f17399454d","name":null,"gpsCode":"SVSZ","municipality":null,"code":null,"long":14.4227656,"lat":67.3340943,"elevation":"32","image":"http://dummyimage.com/218x234.png/ff4444/ffffff"},
    {"id":"77d08e95-6785-4812-8f93-d28e0c49f344","name":"Chignik Fisheries Airport","gpsCode":null,"municipality":"Chignik","code":"KBTM","long":101.1756457,"lat":54.4515199,"elevation":"25","image":"http://dummyimage.com/208x212.png/ff4444/ffffff"},
    {"id":"a197262f-d0f6-40b9-b140-12c203f59e9f","name":"Cleveland Hopkins International Airport","gpsCode":"KCLE","municipality":"Cleveland","code":"SEII","long":25.5987643,"lat":48.8144251,"elevation":"791","image":"http://dummyimage.com/220x239.png/ff4444/ffffff"},
    {"id":"4aa90bb1-0ff0-46b7-bfc5-bebc193f27e4","name":null,"gpsCode":"KRME","municipality":"Rome","code":null,"long":77.56662,"lat":39.08335,"elevation":"504","image":"http://dummyimage.com/202x214.png/dddddd/000000"},
    {"id":"e28ba85e-f3f7-4dbf-9313-5e9e8b31b449","name":"Choiseul Bay Airport","gpsCode":"AGGC","municipality":null,"code":null,"long":121.1140816,"lat":14.6062786,"elevation":null,"image":"http://dummyimage.com/249x216.png/ff4444/ffffff"},
    {"id":"2dbd538e-c4aa-409e-ab21-a263e8e942e1","name":null,"gpsCode":"FCOU","municipality":null,"code":null,"long":120.9965883,"lat":14.5792342,"elevation":"1158","image":"http://dummyimage.com/206x207.png/5fa2dd/ffffff"},
    {"id":"0f498ab4-86cf-416b-a082-840d3fc5a262","name":"Cortina Airport","gpsCode":"LIDI","municipality":"Cortina D'Ampezzo","code":"E13","long":-103.2605763,"lat":25.7784224,"elevation":"4213","image":"http://dummyimage.com/236x204.png/dddddd/000000"},
    {"id":"3ca0475f-8b23-4a2f-94bd-9b5159e59472","name":"Augusta Regional At Bush Field","gpsCode":"KAGS","municipality":"Augusta","code":"JLA","long":16.3758145,"lat":6.3188032,"elevation":"144","image":"http://dummyimage.com/208x226.png/dddddd/000000"},
    {"id":"4b88490d-03b4-4075-9367-64ce77991116","name":null,"gpsCode":"FKKY","municipality":"Yaound??","code":null,"long":18.2791747,"lat":50.6696898,"elevation":"2464","image":"http://dummyimage.com/237x241.png/dddddd/000000"},
    {"id":"d95b0eed-5b8a-428c-9002-6c6c3b230779","name":"Negril Airport","gpsCode":"MKNG","municipality":"Negril","code":"HCMC","long":-113.2957365,"lat":53.5412083,"elevation":"9","image":"http://dummyimage.com/246x222.png/cc0000/ffffff"},
    {"id":"97f38143-96f8-46b0-8e6b-c9b83924fd45","name":"Black Hills Airport-Clyde Ice Field","gpsCode":"KSPF","municipality":"Spearfish","code":"KDTS","long":106.5701927,"lat":-7.1221059,"elevation":"3931","image":"http://dummyimage.com/231x232.png/cc0000/ffffff"},
    {"id":"3d624183-7278-4f70-902f-0c6c542669c0","name":"Tufi Airport","gpsCode":"AYTU","municipality":"Tufi","code":"ZLTS","long":124.286825,"lat":12.50337,"elevation":"85","image":"http://dummyimage.com/235x235.png/ff4444/ffffff"},
    {"id":"82de90e9-1e80-4587-a757-db77d2a8397a","name":null,"gpsCode":"MRPV","municipality":"San Jose","code":null,"long":-8.4270764,"lat":40.1628977,"elevation":"3287","image":"http://dummyimage.com/206x210.png/ff4444/ffffff"},
    {"id":"ed6f6593-0bb3-4c2b-a333-8228e8f5b0c6","name":"Filippos Airport","gpsCode":"LGKZ","municipality":"Kozani","code":"SBTE","long":15.7904531,"lat":50.1454119,"elevation":"2059","image":"http://dummyimage.com/215x247.png/ff4444/ffffff"},
    {"id":"022b2c43-8afa-469d-a976-36160a72af02","name":"Pescara International Airport","gpsCode":"LIBP","municipality":"Pescara","code":"KERI","long":-37.4329352,"lat":-10.6872332,"elevation":"48","image":"http://dummyimage.com/204x237.png/cc0000/ffffff"},
    {"id":"21a1ecc6-bfac-474c-93ce-948ed57110f0","name":"Kashan Airport","gpsCode":"OIFK","municipality":"Kashan","code":null,"long":85.0828553,"lat":52.307093,"elevation":"3465","image":"http://dummyimage.com/236x225.png/5fa2dd/ffffff"},
    {"id":"7de60fd0-2520-4e9e-8a24-a45ac0f56ab5","name":"RAF Scampton","gpsCode":"EGXP","municipality":"Scampton","code":"LFHU","long":11.0057554,"lat":45.446079,"elevation":"202","image":"http://dummyimage.com/208x239.png/5fa2dd/ffffff"},
    {"id":"726157eb-1c43-4a75-b7f1-1550332b6f04","name":"Gogebic Iron County Airport","gpsCode":"KIWD","municipality":"Ironwood","code":"EPRU","long":30.646246,"lat":31.1285463,"elevation":"1230","image":"http://dummyimage.com/243x245.png/cc0000/ffffff"},
    {"id":"3722a4f9-e0d5-4cfa-b611-265b638a3ce2","name":null,"gpsCode":"KTUS","municipality":"Tucson","code":null,"long":120.5879653,"lat":15.1757062,"elevation":"2643","image":"http://dummyimage.com/250x241.png/5fa2dd/ffffff"},
    {"id":"34aac4b1-4c7a-4abe-a37a-f2ecf0abd196","name":"Akutan Seaplane Base","gpsCode":"KQA","municipality":"Akutan","code":"EGOV","long":-73.0405277,"lat":11.3421375,"elevation":null,"image":"http://dummyimage.com/237x242.png/dddddd/000000"},
    {"id":"db52ecad-301b-4e84-89d9-fb1194d86b34","name":null,"gpsCode":"RJSS","municipality":"Sendai","code":null,"long":22.7117106,"lat":48.4493055,"elevation":"15","image":"http://dummyimage.com/212x216.png/ff4444/ffffff"},
    {"id":"02f3afd5-4e23-4d6b-b95a-1f1f8630a996","name":"Tari Airport","gpsCode":"AYTA","municipality":"Tari","code":"OLKA","long":25.9231471,"lat":-2.9492205,"elevation":"5500","image":"http://dummyimage.com/201x249.png/dddddd/000000"},
    {"id":"b0a0162e-2e9b-4433-8038-04ca9b76fec0","name":"Laurence G Hanscom Field","gpsCode":"KBED","municipality":"Bedford","code":"AYTJ","long":122.51667,"lat":10.8,"elevation":"133","image":"http://dummyimage.com/219x204.png/ff4444/ffffff"},
    {"id":"70af6729-1995-46aa-8502-a24b4c317cdf","name":"Destin Executive Airport","gpsCode":"KDTS","municipality":"Destin","code":"YNSH","long":22.2116432,"lat":40.3515428,"elevation":"23","image":"http://dummyimage.com/231x250.png/cc0000/ffffff"},
    {"id":"83e507c6-929b-4f0f-b31c-fa0ce3daee51","name":"J??nk??ping Airport","gpsCode":"ESGJ","municipality":"J??nk??ping","code":"SPBB","long":106.7175669,"lat":-6.4306844,"elevation":"741","image":"http://dummyimage.com/214x215.png/5fa2dd/ffffff"},
    {"id":"347c6e1f-7b90-4e5f-85a9-8840e7820f67","name":"Kabwum","gpsCode":"AYKB","municipality":null,"code":null,"long":111.430057,"lat":22.410005,"elevation":"4450","image":"http://dummyimage.com/249x225.png/5fa2dd/ffffff"},
    {"id":"b712b115-bbe1-44ec-a0ea-ca8081b9ac76","name":"Futaleuf?? Airport","gpsCode":"SCFT","municipality":"Futaleufu","code":"FBLV","long":109.1434108,"lat":-7.3363345,"elevation":"1148","image":"http://dummyimage.com/241x200.png/5fa2dd/ffffff"},
    {"id":"49f9e217-695a-4204-8249-8a67d9ed0222","name":"Pantnagar Airport","gpsCode":"VIPT","municipality":"Pantnagar","code":"GMTN","long":114.367189,"lat":48.051542,"elevation":"769","image":"http://dummyimage.com/203x222.png/dddddd/000000"},
    {"id":"ab339257-2b81-4078-ae52-95c7ff19abb5","name":"Tumeremo Airport","gpsCode":"SVTM","municipality":null,"code":"WARA","long":2.4725036,"lat":48.8066526,"elevation":"345","image":"http://dummyimage.com/249x209.png/cc0000/ffffff"},
    {"id":"390c2926-ec78-471f-8af9-bbd26ce46a6c","name":"Chuja Port Heliport","gpsCode":null,"municipality":"Chuja, Hach???uja-do (Chujado Islands)","code":"BINF","long":18.470633,"lat":-34.0736398,"elevation":null,"image":"http://dummyimage.com/236x233.png/5fa2dd/ffffff"},
    {"id":"537d83a4-1306-442d-8230-bae035dac16d","name":"D??sseldorf Airport","gpsCode":"EDDL","municipality":"D??sseldorf","code":"HUEN","long":109.5568089,"lat":-6.9828037,"elevation":"147","image":"http://dummyimage.com/222x230.png/5fa2dd/ffffff"},
    {"id":"c79d3ad1-3cdf-4cba-a770-fab8f6379cc1","name":null,"gpsCode":"KNKX","municipality":"San Diego","code":null,"long":44.4955531,"lat":56.1085807,"elevation":"477","image":"http://dummyimage.com/217x244.png/cc0000/ffffff"},
    {"id":"718794de-198d-4453-a725-0ff4dff889d9","name":"Enrique Malek International Airport","gpsCode":"MPDA","municipality":"David","code":"EFSO","long":108.960747,"lat":34.26645,"elevation":"89","image":"http://dummyimage.com/247x211.png/ff4444/ffffff"},
    {"id":"eb1e76cf-f06c-47cd-9e38-04f98577840f","name":"Nancy-Essey Airport","gpsCode":"LFSN","municipality":"Nancy/Essey","code":"KHRO","long":65.628237,"lat":62.5465831,"elevation":"751","image":"http://dummyimage.com/245x202.png/cc0000/ffffff"},
    {"id":"4ad843b8-5e99-4f8d-910e-75c222c8f74c","name":"Kaieteur International Airport","gpsCode":"SYKA","municipality":"Kaieteur Falls","code":"YJIN","long":131.2449277,"lat":34.0753818,"elevation":"1520","image":"http://dummyimage.com/250x230.png/cc0000/ffffff"},
    {"id":"d19a9559-e650-4f03-900f-ea7287f28b11","name":"Djanet Inedbirene Airport","gpsCode":"DAAJ","municipality":"Djanet","code":"FNCA","long":-9.448724,"lat":51.680591,"elevation":"3176","image":"http://dummyimage.com/209x202.png/dddddd/000000"},
    {"id":"99491940-c274-45fb-bc72-73628922f394","name":"Whyalla Airport","gpsCode":"YWHA","municipality":"Whyalla","code":"EDWL","long":117.365052,"lat":25.941937,"elevation":"41","image":"http://dummyimage.com/220x227.png/ff4444/ffffff"},
    {"id":"256005d2-e145-470d-86c8-53191bff53ec","name":"Bob Sikes Airport","gpsCode":"KCEW","municipality":"Crestview","code":"DNAS","long":40.2586934,"lat":48.4083877,"elevation":"213","image":"http://dummyimage.com/222x235.png/cc0000/ffffff"},
    {"id":"8e0a7e49-3b5b-4884-877b-9948bd6a51d0","name":"Decatur County Industrial Air Park","gpsCode":"KBGE","municipality":"Bainbridge","code":null,"long":-87.2655636,"lat":14.4463627,"elevation":"141","image":"http://dummyimage.com/211x200.png/cc0000/ffffff"},
    {"id":"0e67aeb1-058f-4b30-9bfe-3181e822882b","name":"Iringa Airport","gpsCode":"HTIR","municipality":"Nduli","code":null,"long":-8.3135858,"lat":41.2609927,"elevation":"4678","image":"http://dummyimage.com/230x237.png/ff4444/ffffff"},
    {"id":"337f67e0-1e89-457c-9e83-7a7ed2a946ee","name":null,"gpsCode":"KAPT","municipality":"Jasper","code":null,"long":27.6082774,"lat":2.7722364,"elevation":"641","image":"http://dummyimage.com/246x236.png/ff4444/ffffff"},
    {"id":"55f665a8-73d6-4445-94e3-22c9853217b3","name":"Sugraly Airport","gpsCode":"UTSN","municipality":"Zarafshan","code":"RCBS","long":112.593047,"lat":-6.9706827,"elevation":"1396","image":"http://dummyimage.com/238x250.png/ff4444/ffffff"},
    {"id":"d6cc8c67-ce90-4805-8dbd-4cb90ecb9a59","name":"Waris Airport","gpsCode":"WAJR","municipality":"Swach","code":"EICA","long":118.604556,"lat":29.492402,"elevation":"1500","image":"http://dummyimage.com/222x219.png/5fa2dd/ffffff"},
    {"id":"241a304d-1d2c-4854-b657-d5a0771c7e63","name":"Pl??nio Alarcom Airport","gpsCode":"SBTG","municipality":"Tr??s Lagoas","code":"USHU","long":18.3595793,"lat":59.7394596,"elevation":"1050","image":"http://dummyimage.com/231x217.png/5fa2dd/ffffff"},
    {"id":"ea1343f3-45eb-4961-ba0b-57e053638138","name":"Masasi Airport","gpsCode":"HTMI","municipality":"Masasi","code":"YLND","long":-8.7543161,"lat":40.3172129,"elevation":"1700","image":"http://dummyimage.com/239x240.png/cc0000/ffffff"},
    {"id":"fdd32af5-1444-4608-ab06-e0cdc1eeea3e","name":"Alto Palena Airport","gpsCode":"SCAP","municipality":"Alto Palena","code":"VGRJ","long":118.6154322,"lat":24.7204697,"elevation":"794","image":"http://dummyimage.com/218x208.png/ff4444/ffffff"},
    {"id":"bd73557d-546f-4530-b11b-a36e54617698","name":"Rangiroa Airport","gpsCode":"NTTG","municipality":null,"code":"PHDH","long":104.2308774,"lat":23.3747635,"elevation":"10","image":"http://dummyimage.com/243x214.png/dddddd/000000"},
    {"id":"e2bcc4f0-3bec-461f-91dc-66eb25ab9e17","name":"Hultsfred Airport","gpsCode":"ESSF","municipality":null,"code":"HADM","long":123.5713405,"lat":10.1189877,"elevation":"366","image":"http://dummyimage.com/237x223.png/ff4444/ffffff"},
    {"id":"edd7bb97-5a97-4546-831a-0138ae53a908","name":null,"gpsCode":"KMTJ","municipality":"Montrose","code":null,"long":108.831894,"lat":34.532295,"elevation":"5759","image":"http://dummyimage.com/245x224.png/cc0000/ffffff"},
    {"id":"f79d1696-1a8a-4fa4-9325-56e55406c190","name":"McGhee Tyson Airport","gpsCode":"KTYS","municipality":"Knoxville","code":"D66","long":21.0670387,"lat":42.6869167,"elevation":"981","image":"http://dummyimage.com/208x210.png/5fa2dd/ffffff"},
    {"id":"2ce56c7e-2611-4e1a-8f65-dc7e6682d863","name":"Wonju/Hoengseong Air Base (K-38/K-46)","gpsCode":"RKNW","municipality":"Wonju","code":"VIPK","long":-80.7023819,"lat":28.0178637,"elevation":"329","image":"http://dummyimage.com/246x203.png/5fa2dd/ffffff"},
    {"id":"f8ddfa6d-7473-4687-a812-1c65e6ce2b31","name":"Shimojishima Airport","gpsCode":"RORS","municipality":"Shimojishima","code":"AYOL","long":5.940651,"lat":44.2642895,"elevation":"54","image":"http://dummyimage.com/242x210.png/ff4444/ffffff"},
    {"id":"2659ac60-063b-4f25-9d39-6abed620e37a","name":"Novo Campo Airport","gpsCode":"SWNK","municipality":"Boca do Acre","code":"FVJN","long":-95.4463322,"lat":30.0118752,"elevation":"394","image":"http://dummyimage.com/213x236.png/ff4444/ffffff"},
    {"id":"efcd7a96-ed61-4d48-89cc-de106d247225","name":"Portoroz Airport","gpsCode":"LJPZ","municipality":"Portoroz","code":"PFAK","long":21.3383382,"lat":37.7668391,"elevation":"7","image":"http://dummyimage.com/246x231.png/ff4444/ffffff"},
    {"id":"2faae69e-55f7-4cac-9468-a32ff2a2a1e1","name":"Momba??a Airport","gpsCode":"SNMB","municipality":"Momba??a","code":"KBTR","long":-99.2058279,"lat":19.4805668,"elevation":"748","image":"http://dummyimage.com/238x201.png/dddddd/000000"},
    {"id":"eaef9e60-3ed0-418f-9e48-910e12b923d2","name":"Macon Downtown Airport","gpsCode":"KMAC","municipality":"Macon","code":null,"long":112.915135,"lat":41.669412,"elevation":"437","image":"http://dummyimage.com/246x224.png/dddddd/000000"},
    {"id":"b88a033f-d7c3-40a6-92f5-cd7889b7d116","name":"Cz??stochowa-Rudniki","gpsCode":"EPRU","municipality":"Cz??stochowa","code":"KEKA","long":-75.4361391,"lat":-13.3833585,"elevation":"860","image":"http://dummyimage.com/212x235.png/5fa2dd/ffffff"},
    {"id":"cdb637ff-16d1-4b2a-a490-8b4a8c2defb6","name":null,"gpsCode":"KTPF","municipality":"Tampa","code":null,"long":125.008956,"lat":8.920465,"elevation":"8","image":"http://dummyimage.com/210x222.png/ff4444/ffffff"},
    {"id":"b841f28b-735e-4f41-9d86-d7c51aacee7f","name":"N??mes-Arles-Camargue Airport","gpsCode":"LFTW","municipality":"N??mes/Garons","code":"KBUM","long":26.7693629,"lat":51.1665287,"elevation":"309","image":"http://dummyimage.com/200x225.png/5fa2dd/ffffff"},
    {"id":"2c8dc5fb-8518-4e58-ab7a-888485eb7acb","name":"Muanda Airport","gpsCode":"FZAG","municipality":null,"code":"RORA","long":-49.0555691,"lat":-25.304882,"elevation":"89","image":"http://dummyimage.com/219x210.png/cc0000/ffffff"},
    {"id":"723cc879-5846-41b2-9116-0e647ef92076","name":"Ingolstadt Manching Airport","gpsCode":"ETSI","municipality":"Manching","code":null,"long":108.319371,"lat":22.837926,"elevation":"1202","image":"http://dummyimage.com/210x207.png/ff4444/ffffff"},
    {"id":"56992c58-5aab-4210-afde-03237fefb227","name":null,"gpsCode":null,"municipality":"Fossil Downs Station","code":null,"long":32.2714587,"lat":30.5964923,"elevation":"414","image":"http://dummyimage.com/246x218.png/5fa2dd/ffffff"},
    {"id":"a0634396-dc7c-4ed9-b149-ea2f88ed9b9b","name":"Mountain Airport","gpsCode":null,"municipality":"Mountain","code":"KBKW","long":67.778633,"lat":33.1184269,"elevation":null,"image":"http://dummyimage.com/220x211.png/ff4444/ffffff"},
    {"id":"e440e776-0bc7-48eb-9c3e-a911c1600e1d","name":"Makin Island Airport","gpsCode":"NGMN","municipality":"Makin Island","code":null,"long":104.0769024,"lat":-4.5261835,"elevation":null,"image":"http://dummyimage.com/220x234.png/dddddd/000000"},
    {"id":"ad0fe3da-9f14-4ebe-9d8a-c4836c360206","name":"Kuujjuarapik Airport","gpsCode":"CYGW","municipality":"Kuujjuarapik","code":"VANP","long":120.477813,"lat":37.646108,"elevation":"34","image":"http://dummyimage.com/246x203.png/dddddd/000000"},
    {"id":"9f67ea2f-b5cd-4f9b-8790-5702c3b41c13","name":"Choiseul Bay Airport","gpsCode":"AGGC","municipality":null,"code":"SLAG","long":111.053561,"lat":21.918725,"elevation":null,"image":"http://dummyimage.com/243x212.png/ff4444/ffffff"},
    {"id":"e50aff5c-1432-4b9d-97b6-d6246a643556","name":null,"gpsCode":"SWJW","municipality":"Jata??","code":null,"long":105.908525,"lat":27.114252,"elevation":"2529","image":"http://dummyimage.com/220x211.png/dddddd/000000"},
    {"id":"d758ed25-bdc8-4793-a0c7-6a6931910eaa","name":"Wahai,Seram Island","gpsCode":"WAPV","municipality":"Seram Island","code":"SLSR","long":5.534063,"lat":45.70734,"elevation":"558","image":"http://dummyimage.com/243x247.png/dddddd/000000"},
    {"id":"8aae1946-a724-430e-9c24-17d7137b21bc","name":"Shanghai Pudong International Airport","gpsCode":"ZSPD","municipality":"Shanghai","code":"SNNU","long":-72.9833,"lat":-41.3167,"elevation":"13","image":"http://dummyimage.com/231x231.png/ff4444/ffffff"},
    {"id":"6b2c25b7-6608-4293-afee-f8cfce4450f5","name":"Mojave Airport","gpsCode":"KMHV","municipality":"Mojave","code":"SEQM","long":108.039002,"lat":30.299559,"elevation":"2801","image":"http://dummyimage.com/219x205.png/cc0000/ffffff"},
    {"id":"8287c367-dd47-4f22-b5bf-9b67ef0d746f","name":"Baudette International Airport","gpsCode":"KBDE","municipality":"Baudette","code":"VEJT","long":65.3688335,"lat":40.103922,"elevation":"1086","image":"http://dummyimage.com/213x204.png/cc0000/ffffff"},
    {"id":"51f0a67d-de48-4cc4-8fac-57bcedb3cc04","name":"Nueva Hesperides International Airport","gpsCode":"SUSO","municipality":"Salto","code":"SVPA","long":19.6147046,"lat":49.8135834,"elevation":"187","image":"http://dummyimage.com/234x234.png/cc0000/ffffff"},
    {"id":"09e66de0-fdd5-4de0-9a0b-1f98c329700f","name":"Masi Manimba Airport","gpsCode":"FZCV","municipality":"Masi Manimba","code":"YLFD","long":119.3062749,"lat":26.0952694,"elevation":"1952","image":"http://dummyimage.com/217x239.png/cc0000/ffffff"},
    {"id":"761cfd30-afa2-4e67-90aa-3b40c06302c9","name":"Maxson Airfield","gpsCode":"89NY","municipality":"Alexandria Bay","code":"LFRC","long":106.5760857,"lat":-6.1179866,"elevation":"340","image":"http://dummyimage.com/217x245.png/dddddd/000000"},
    {"id":"88a19fe7-6978-45f3-bf62-57760311a78f","name":"Bushehr Airport","gpsCode":"OIBB","municipality":"Bushehr","code":"VCCK","long":29.2055142,"lat":62.1738098,"elevation":"68","image":"http://dummyimage.com/232x234.png/cc0000/ffffff"},
    {"id":"029dc36e-bb2b-4f7a-927a-3e176228f300","name":"Ambatolhy Airport","gpsCode":null,"municipality":"Ambatolahy","code":"RJCK","long":79.9115522,"lat":6.9782137,"elevation":"340","image":"http://dummyimage.com/215x220.png/5fa2dd/ffffff"},
    {"id":"2b9afbf2-0200-433a-a689-7620fc10c436","name":null,"gpsCode":"OASD","municipality":null,"code":null,"long":32.5077211,"lat":48.652412,"elevation":"3773","image":"http://dummyimage.com/213x238.png/dddddd/000000"},
    {"id":"3498b054-d2b1-421f-9589-3e5ff64c087c","name":null,"gpsCode":"KGLE","municipality":"Gainesville","code":null,"long":-78.60585,"lat":-0.931556,"elevation":"845","image":"http://dummyimage.com/225x234.png/dddddd/000000"},
    {"id":"64f00424-fddf-4ceb-ab54-d42b915853b1","name":"Tongliao Airport","gpsCode":"ZBTL","municipality":"Tongliao","code":"WMKN","long":18.091186,"lat":59.4527156,"elevation":"2395","image":"http://dummyimage.com/248x227.png/dddddd/000000"},
    {"id":"d1d54178-f54e-4c22-93e7-d4f551f2c310","name":"??anakkale Airport","gpsCode":"LTBH","municipality":"??anakkale","code":"USHU","long":-43.2134484,"lat":-11.9590294,"elevation":"23","image":"http://dummyimage.com/227x244.png/dddddd/000000"},
    {"id":"2bb3f749-d20e-441f-b556-9e88a5f6bd33","name":"Gomel Airport","gpsCode":"UMGG","municipality":"Gomel","code":"SCAP","long":77.0852258,"lat":42.6503176,"elevation":"472","image":"http://dummyimage.com/233x233.png/ff4444/ffffff"},
    {"id":"1f3f4647-08d6-4a65-a81f-082d8d5f3219","name":"Murtala Muhammed International Airport","gpsCode":"DNMM","municipality":"Lagos","code":"DBBP","long":104.2163411,"lat":14.9792432,"elevation":"135","image":"http://dummyimage.com/227x239.png/dddddd/000000"},
    {"id":"a156f5b3-7203-4464-bec9-e6b507e14802","name":"Licenciado Miguel de la Madrid Airport","gpsCode":"MMIA","municipality":"Colima","code":"PAKW","long":110.637506,"lat":29.020827,"elevation":"2467","image":"http://dummyimage.com/226x229.png/cc0000/ffffff"},
    {"id":"4ebbf54e-a70c-418f-bb2b-c1e617f71a1e","name":"Yalumet Airport","gpsCode":"AYYE","municipality":"Yalumet","code":"LGST","long":111.1470115,"lat":-6.7149192,"elevation":"2600","image":"http://dummyimage.com/249x221.png/dddddd/000000"},
    {"id":"477f8834-a934-43fe-afae-f013749924dd","name":"Bromont (Roland Desourdy) Airport","gpsCode":"CZBM","municipality":"Bromont","code":"KMLI","long":17.536297,"lat":43.2270189,"elevation":"375","image":"http://dummyimage.com/229x231.png/5fa2dd/ffffff"},
    {"id":"2d164bcb-e8d7-41e1-a2d1-32a1e3a149f7","name":"Brisbane International Airport","gpsCode":"YBBN","municipality":"Brisbane","code":"ENAL","long":-86.3944828,"lat":35.8559647,"elevation":"13","image":"http://dummyimage.com/243x212.png/dddddd/000000"},
    {"id":"fcd1d08b-eaf7-4a46-9ae8-a749142a61de","name":"Harry P Williams Memorial Airport","gpsCode":"KPTN","municipality":"Patterson","code":"OPPS","long":-48.3242858,"lat":-10.249091,"elevation":"9","image":"http://dummyimage.com/238x208.png/5fa2dd/ffffff"},
    {"id":"e78fcb12-6a3b-4164-953f-c15efa4a063c","name":"Simferopol International Airport","gpsCode":"UKFF","municipality":"Simferopol","code":"ZSJD","long":38.65064,"lat":55.49567,"elevation":"639","image":"http://dummyimage.com/207x250.png/dddddd/000000"},
    {"id":"7f6ea2cf-e597-43f7-b674-60eb8ab661a5","name":"LaGrange Callaway Airport","gpsCode":"KLGC","municipality":"Lagrange","code":"KPOE","long":-39.2791011,"lat":-7.3811967,"elevation":"693","image":"http://dummyimage.com/227x215.png/5fa2dd/ffffff"},
    {"id":"e1669315-408f-4e82-aa67-edaf6e736213","name":"Kunsan Air Base","gpsCode":"RKJK","municipality":"Kunsan","code":"KPQL","long":14.524558,"lat":59.326934,"elevation":"29","image":"http://dummyimage.com/212x204.png/ff4444/ffffff"},
    {"id":"91e3288b-367a-4643-bf2e-d6bda6667667","name":"Nova Vida Airport","gpsCode":"SWNI","municipality":"Ariquemes","code":"DNAS","long":-94.4632404,"lat":18.1224925,"elevation":"410","image":"http://dummyimage.com/248x244.png/ff4444/ffffff"},
    {"id":"6a18fc90-ddb2-41de-acb5-fca24c83e448","name":"Esenbo??a International Airport","gpsCode":"LTAC","municipality":"Ankara","code":"SISP","long":122.551718,"lat":10.509627,"elevation":"3125","image":"http://dummyimage.com/207x206.png/dddddd/000000"},
    {"id":"a43a60a2-25e9-468f-8a46-39b3b139f3fe","name":"Gascoyne Junction Airport","gpsCode":"YGSC","municipality":"Gascoyne Junction","code":null,"long":112.899762,"lat":30.402167,"elevation":"499","image":"http://dummyimage.com/210x200.png/dddddd/000000"},
    {"id":"d1a0b5f9-14c4-479d-adf4-3f6b4bbcf25d","name":"Los Chiles Airport","gpsCode":"MRLC","municipality":"Los Chiles","code":"KSKA","long":62.2040287,"lat":34.352865,"elevation":"131","image":"http://dummyimage.com/205x211.png/dddddd/000000"},
    {"id":"9aa092e7-daf9-4363-a62c-f15558488271","name":"Shah Amanat International Airport","gpsCode":"VGEG","municipality":"Chittagong","code":"ZHSY","long":-46.3961359,"lat":-23.960745,"elevation":"12","image":"http://dummyimage.com/216x206.png/ff4444/ffffff"},
    {"id":"c1427ecb-9ee9-43c2-8d7d-18ca0bf3466f","name":"Eleftherios Venizelos International Airport","gpsCode":"LGAV","municipality":"Athens","code":"VYKT","long":21.0281495,"lat":52.1028471,"elevation":"308","image":"http://dummyimage.com/216x240.png/5fa2dd/ffffff"},
    {"id":"b2a7cae4-c92e-4974-8197-3a25df9b1eb3","name":"RAF Marham","gpsCode":"EGYM","municipality":"Marham","code":"SLCA","long":22.65167,"lat":42.83528,"elevation":"75","image":"http://dummyimage.com/209x236.png/dddddd/000000"},
    {"id":"841f04b7-b541-49b6-a611-8e7667097e48","name":null,"gpsCode":"CZBM","municipality":"Bromont","code":null,"long":122.1235054,"lat":-8.6436289,"elevation":"375","image":"http://dummyimage.com/227x246.png/ff4444/ffffff"},
    {"id":"c0551582-c74e-41c4-abe6-d10442e2d697","name":"Bahrain International Airport","gpsCode":"OBBI","municipality":"Manama","code":"LFBO","long":118.390218,"lat":30.411429,"elevation":"6","image":"http://dummyimage.com/228x201.png/cc0000/ffffff"},
    {"id":"caaee101-4733-4a95-bbc2-4ea30d3b405d","name":null,"gpsCode":"SSMF","municipality":"Mafra","code":null,"long":19.8828847,"lat":44.8237819,"elevation":"2690","image":"http://dummyimage.com/218x203.png/dddddd/000000"},
    {"id":"37c375f8-ae1d-4de8-9f31-81b090631341","name":null,"gpsCode":"KRDG","municipality":"Reading","code":null,"long":6.7788461,"lat":4.7231169,"elevation":"344","image":"http://dummyimage.com/211x248.png/cc0000/ffffff"},
    {"id":"c41a46d6-e653-4e5c-b510-d0cbcc305617","name":"Abaco I Walker C Airport","gpsCode":"MYAW","municipality":null,"code":"VNDT","long":105.931414,"lat":29.761159,"elevation":"10","image":"http://dummyimage.com/222x204.png/cc0000/ffffff"},
    {"id":"f6b31d4d-070a-489b-a682-0ce340b5cbee","name":"Xiangyang Liuji Airport","gpsCode":"ZHXF","municipality":"Xiangfan","code":"YMMB","long":140.6618666,"lat":36.6287219,"elevation":null,"image":"http://dummyimage.com/241x230.png/dddddd/000000"},
    {"id":"72242251-1a9e-4da3-8445-35c7633f4971","name":"Mossendjo Airport","gpsCode":"FCMM","municipality":"Mossendjo","code":null,"long":106.999722,"lat":20.8,"elevation":"1519","image":"http://dummyimage.com/249x241.png/cc0000/ffffff"},
    {"id":"0eb78fa2-433a-4708-8fe7-ee154fabd1ba","name":"Wadi Ain Airport","gpsCode":null,"municipality":"Wadi Ain","code":"KBPK","long":111.8568586,"lat":37.2425649,"elevation":null,"image":"http://dummyimage.com/231x206.png/dddddd/000000"},
    {"id":"e3d94c1f-4858-4f6a-8a11-9549c5eabcef","name":null,"gpsCode":"VTUL","municipality":null,"code":null,"long":-75.4264609,"lat":-11.8073201,"elevation":"860","image":"http://dummyimage.com/245x210.png/ff4444/ffffff"},
    {"id":"97257ef6-0b83-45e6-b320-679c24e9d300","name":"General E. Mosconi Airport","gpsCode":"SAVC","municipality":"Comodoro Rivadavia","code":"KTOA","long":22.0951156,"lat":52.0969643,"elevation":"189","image":"http://dummyimage.com/242x215.png/dddddd/000000"},
    {"id":"400e7f95-6b98-4a18-a866-7a655368b6a9","name":null,"gpsCode":"DAUB","municipality":"Biskra","code":null,"long":108.6205315,"lat":-7.4416099,"elevation":"289","image":"http://dummyimage.com/243x223.png/dddddd/000000"},
    {"id":"0fb99825-f8cc-402b-bf59-1157813cdcff","name":"Mineral Wells Airport","gpsCode":"KMWL","municipality":"Mineral Wells","code":"KHLR","long":120.4393126,"lat":36.386498,"elevation":"974","image":"http://dummyimage.com/213x250.png/dddddd/000000"},
    {"id":"3a5f5db8-411a-4000-899c-a85ecb9fb7b9","name":"Ewo Airport","gpsCode":"FCOE","municipality":"Ewo","code":"LFOK","long":30.8005553,"lat":55.024145,"elevation":"1503","image":"http://dummyimage.com/215x242.png/5fa2dd/ffffff"},
    {"id":"e47e90ea-c2b7-4446-8ba1-5944c6fac0e4","name":null,"gpsCode":"ZWTP","municipality":"Turpan","code":null,"long":22.5089067,"lat":48.5412136,"elevation":"934","image":"http://dummyimage.com/250x217.png/cc0000/ffffff"},
    {"id":"86701805-d457-4005-b001-31fba4c3e303","name":null,"gpsCode":"LTBJ","municipality":"??zmir","code":null,"long":117.9249002,"lat":35.8939566,"elevation":"412","image":"http://dummyimage.com/233x250.png/cc0000/ffffff"},
    {"id":"6d844b5c-422a-4c70-bd63-041c097bd7ae","name":"Port Alfred Airport","gpsCode":"FAPA","municipality":"Port Alfred","code":"VGBR","long":114.152004,"lat":38.153853,"elevation":"275","image":"http://dummyimage.com/239x231.png/ff4444/ffffff"},
    {"id":"b30aeb08-2dbb-4147-b550-982161fb52f7","name":null,"gpsCode":"VEBG","municipality":"Balurghat","code":null,"long":121.0409412,"lat":14.5598164,"elevation":"78","image":"http://dummyimage.com/244x227.png/dddddd/000000"},
    {"id":"2657e4a4-6e4c-4298-9a8b-30f3ba152ce6","name":"Campbell AAF (Fort Campbell) Air Field","gpsCode":"KHOP","municipality":"Fort Campbell/Hopkinsville","code":null,"long":-8.437181,"lat":40.9050121,"elevation":"573","image":"http://dummyimage.com/240x229.png/5fa2dd/ffffff"},
    {"id":"78b02e20-bed2-4d88-a59d-37db2d517ba8","name":"Kincardine Municipal Airport","gpsCode":"CYKM","municipality":"Kincardine","code":null,"long":33.2050521,"lat":51.2409432,"elevation":"772","image":"http://dummyimage.com/202x230.png/cc0000/ffffff"},
    {"id":"82bc1809-8061-47a1-8e13-5cd0ef3baff0","name":"Ulsan Airport","gpsCode":"RKPU","municipality":"Ulsan","code":"EGAE","long":-99.1393889,"lat":19.5576165,"elevation":"45","image":"http://dummyimage.com/212x237.png/cc0000/ffffff"},
    {"id":"36303171-ec2c-4575-ad12-1c0af7d79b35","name":"Wang-an Airport","gpsCode":"RCWA","municipality":"Wang-an","code":"HEDK","long":18.8067375,"lat":49.8156816,"elevation":"115","image":"http://dummyimage.com/250x226.png/ff4444/ffffff"},
    {"id":"42dfb51c-010f-4183-b01f-b3adec7a47ce","name":"Usino Airport","gpsCode":null,"municipality":"Usino","code":null,"long":126.09611,"lat":39.1425,"elevation":"430","image":"http://dummyimage.com/223x231.png/ff4444/ffffff"},
    {"id":"e2a93d13-4b34-4ce2-b9d8-8fecf2f477f0","name":"Craig Cove Airport","gpsCode":"NVSF","municipality":"Craig Cove","code":"FNBC","long":-43.9875878,"lat":-19.8078961,"elevation":"69","image":"http://dummyimage.com/220x243.png/5fa2dd/ffffff"},
    {"id":"90b72375-8bff-47f9-9d3e-fb702a23d672","name":"Warren Airport","gpsCode":"YWRN","municipality":null,"code":"HKKT","long":-70.401535,"lat":8.7548237,"elevation":"669","image":"http://dummyimage.com/215x214.png/5fa2dd/ffffff"},
    {"id":"f0dad735-42fd-4c72-8883-2e3e544c5fe1","name":"Oum el Bouaghi airport","gpsCode":"DAEO","municipality":"Oum El Bouaghi","code":"CYYB","long":114.174842,"lat":27.598453,"elevation":"2980","image":"http://dummyimage.com/240x227.png/ff4444/ffffff"},
    {"id":"8c6d04eb-0014-4ea4-865c-bf342bd27f50","name":"Ararat Airport","gpsCode":"YARA","municipality":null,"code":"YBRW","long":115.622147,"lat":26.731743,"elevation":"1008","image":"http://dummyimage.com/215x236.png/5fa2dd/ffffff"},
    {"id":"98953377-0557-4918-bd36-4bf1bde11d0e","name":"Ekibastuz Airport","gpsCode":"UASB","municipality":"Ekibastuz","code":"PAEN","long":115.58934,"lat":39.639844,"elevation":"621","image":"http://dummyimage.com/208x200.png/cc0000/ffffff"},
    {"id":"b83904d8-cc63-4be6-a2ab-d279b87f5882","name":"Aachen-Merzbr??ck Airport","gpsCode":"EDKA","municipality":"Aachen","code":"KBPG","long":112.4496521,"lat":23.0685814,"elevation":"623","image":"http://dummyimage.com/233x238.png/ff4444/ffffff"},
    {"id":"cdc8054d-4f15-4b9b-9a00-0d94157bca3f","name":null,"gpsCode":"CZFA","municipality":"Faro","code":null,"long":122.9634852,"lat":-8.339355,"elevation":"2351","image":"http://dummyimage.com/227x200.png/cc0000/ffffff"},
    {"id":"ae3ce19d-f697-418e-86e1-5772ca7bb3b8","name":"Napaskiak Airport","gpsCode":"PAPK","municipality":"Napaskiak","code":"SKBO","long":115.429626,"lat":30.203152,"elevation":"24","image":"http://dummyimage.com/229x250.png/dddddd/000000"},
    {"id":"d5a9a633-0269-45bb-8a61-9da068550a48","name":"Ivanof Bay Seaplane Base","gpsCode":"KIB","municipality":"Ivanof Bay","code":"KMPO","long":121.158434,"lat":36.776378,"elevation":"0","image":"http://dummyimage.com/247x209.png/5fa2dd/ffffff"},
    {"id":"c12f223e-2352-4773-82b9-00ce3d044077","name":"Krak??w John Paul II International Airport","gpsCode":"EPKK","municipality":"Krak??w","code":"CAL3","long":-71.0590624,"lat":42.3604802,"elevation":"791","image":"http://dummyimage.com/217x219.png/cc0000/ffffff"},
    {"id":"dde78e81-dd70-4172-84da-99e1b9772b45","name":"Mc Carthy Airport","gpsCode":"PAMX","municipality":"Mccarthy","code":"AYIY","long":-75.6695834,"lat":4.9764526,"elevation":"1531","image":"http://dummyimage.com/238x211.png/5fa2dd/ffffff"},
    {"id":"5354a185-75f7-40fb-a732-2391e3aa65c2","name":"Mananara Nord Airport","gpsCode":"FMNC","municipality":"Mananara Nord","code":null,"long":119.338788,"lat":34.760249,"elevation":"9","image":"http://dummyimage.com/214x234.png/5fa2dd/ffffff"},
    {"id":"37aaafc3-a037-431d-b357-426c66f38e17","name":"Combolcha Airport","gpsCode":"HADC","municipality":"Dessie","code":"KOLS","long":120.94639,"lat":14.707895,"elevation":"6117","image":"http://dummyimage.com/237x238.png/5fa2dd/ffffff"},
    {"id":"0ee61754-8bce-494b-892a-6b6651368db5","name":"Shepparton Airport","gpsCode":"YSHT","municipality":null,"code":"RPVO","long":-79.6080967,"lat":-5.3755675,"elevation":"374","image":"http://dummyimage.com/200x213.png/ff4444/ffffff"},
    {"id":"00449927-eee3-4da9-9545-fd5851a93b2d","name":"Bodinumu Airport","gpsCode":"AYBD","municipality":"Bodinumu","code":"LGIK","long":102.579531,"lat":17.8895907,"elevation":"3700","image":"http://dummyimage.com/211x250.png/cc0000/ffffff"},
    {"id":"880a29d1-73f1-49fb-b2b0-e3b4aedc3de9","name":"Mingan Airport","gpsCode":null,"municipality":"Mingan","code":null,"long":1.9038837,"lat":43.0429124,"elevation":"70","image":"http://dummyimage.com/214x224.png/ff4444/ffffff"},
    {"id":"53b902f3-498e-46fe-8fff-6b3bb8bd8b2d","name":null,"gpsCode":"OPCL","municipality":"Chilas","code":null,"long":72.8228652,"lat":18.9133079,"elevation":"4146","image":"http://dummyimage.com/247x226.png/5fa2dd/ffffff"},
    {"id":"766f3bb0-0881-4737-b336-011ff0e29356","name":"Aksu Airport","gpsCode":"ZWAK","municipality":"Aksu","code":"MMCL","long":114.2509376,"lat":-8.3200799,"elevation":"3816","image":"http://dummyimage.com/233x212.png/5fa2dd/ffffff"},
    {"id":"e8057cfb-922e-4c8b-a160-751e6aa08ef4","name":"Sandy Lake Airport","gpsCode":"CZSJ","municipality":"Sandy Lake","code":"FQMD","long":13.6295806,"lat":45.9199884,"elevation":"951","image":"http://dummyimage.com/208x212.png/ff4444/ffffff"},
    {"id":"0dd33096-2680-4d68-b665-24f57e918f37","name":"Sekakes Airport","gpsCode":"FXSK","municipality":"Sekakes","code":"EGFF","long":12.5742882,"lat":55.6751524,"elevation":"5700","image":"http://dummyimage.com/218x236.png/cc0000/ffffff"},
    {"id":"de96b425-108b-451a-b3c2-c2ce4987c7a3","name":"Goloson International Airport","gpsCode":"MHLC","municipality":"La Ceiba","code":"KCYS","long":35.0863723,"lat":45.0274234,"elevation":"39","image":"http://dummyimage.com/228x245.png/ff4444/ffffff"},
    {"id":"503c0200-2b1e-4b3b-8200-7d001bc4af38","name":null,"gpsCode":"AYWD","municipality":null,"code":null,"long":124.3090475,"lat":13.869601,"elevation":"5889","image":"http://dummyimage.com/235x211.png/dddddd/000000"},
    {"id":"b02ac092-4d6a-4a16-8c19-ee68dfae0a66","name":"Bermuda Dunes Airport","gpsCode":"KUDD","municipality":"Palm Springs","code":"NZAS","long":-7.9318645,"lat":40.5045999,"elevation":"73","image":"http://dummyimage.com/243x201.png/cc0000/ffffff"},
    {"id":"1d2fa4f4-6964-4178-ad0e-b2e8b7fc512d","name":null,"gpsCode":"EDQD","municipality":"Bayreuth","code":null,"long":20.3904598,"lat":-9.6612173,"elevation":"1601","image":"http://dummyimage.com/204x237.png/cc0000/ffffff"},
    {"id":"88258ec7-4e64-4c35-b903-251c6600d1b4","name":"Moki Airport","gpsCode":null,"municipality":"Moki","code":"BIHT","long":106.763895,"lat":25.237566,"elevation":"3030","image":"http://dummyimage.com/209x227.png/5fa2dd/ffffff"},
    {"id":"a2973b8f-93b2-49df-851f-b3710fd8dad5","name":null,"gpsCode":"SAAR","municipality":"Rosario","code":null,"long":-52.6449937,"lat":5.1677581,"elevation":"85","image":"http://dummyimage.com/216x218.png/dddddd/000000"},
    {"id":"9331511e-d6cf-4801-839f-695ab5516fad","name":"Koinambe Airport","gpsCode":"AYON","municipality":"Konambe","code":"NCMR","long":102.405819,"lat":24.168957,"elevation":"3000","image":"http://dummyimage.com/241x248.png/dddddd/000000"},
    {"id":"114d2c04-5a51-4310-9356-0fa66cefbeb0","name":"Coatepeque Airport","gpsCode":"MGCT","municipality":"Coatepeque","code":"N04","long":91.339774,"lat":48.6618569,"elevation":"1486","image":"http://dummyimage.com/211x233.png/cc0000/ffffff"},
    {"id":"17a22f66-ae9f-475d-8c74-8391e96d13fe","name":"King Cove Airport","gpsCode":"PAVC","municipality":"King Cove","code":"YDAY","long":31.86,"lat":31.18,"elevation":"155","image":"http://dummyimage.com/215x225.png/dddddd/000000"},
    {"id":"e015c1ed-bd18-478c-aa65-8d0c98c767d6","name":"Naha Airport","gpsCode":"ROAH","municipality":"Naha","code":"PAKU","long":100.721884,"lat":22.62097,"elevation":"12","image":"http://dummyimage.com/214x239.png/ff4444/ffffff"},
    {"id":"3a44927d-7a63-4cbd-bbad-56e065b3bdff","name":"Nevatim Air Base","gpsCode":"LLNV","municipality":"Beersheba","code":"UWUK","long":111.8568586,"lat":37.2425649,"elevation":"1330","image":"http://dummyimage.com/231x215.png/cc0000/ffffff"},
    {"id":"f01a988d-fa61-41e4-91fd-30cbcc286a7f","name":"Malcolm McKinnon Airport","gpsCode":"KSSI","municipality":"Brunswick","code":"KMCC","long":-47.7440315,"lat":-23.1744477,"elevation":"19","image":"http://dummyimage.com/241x241.png/cc0000/ffffff"},
    {"id":"8717f351-6b5a-46e8-9202-da4d52c83a5c","name":null,"gpsCode":"SNGA","municipality":"Guarapari","code":null,"long":110.447063,"lat":-6.9818839,"elevation":"28","image":"http://dummyimage.com/229x223.png/ff4444/ffffff"},
    {"id":"ddc52b24-9209-40d8-acf5-dc4fe2429e01","name":"Weam Airport","gpsCode":"AYXW","municipality":"Weam","code":"VEKU","long":108.7422767,"lat":-7.4234223,"elevation":"50","image":"http://dummyimage.com/212x219.png/ff4444/ffffff"},
    {"id":"c8a64908-7fc1-4122-a415-aad34aa70006","name":"Hiroshima Airport","gpsCode":"RJOA","municipality":"Hiroshima","code":"SCEV","long":96.06085,"lat":5.255183,"elevation":"1088","image":"http://dummyimage.com/221x223.png/ff4444/ffffff"},
    {"id":"0efb72ab-d70e-4a6d-b0af-ee7fd35ecac9","name":"La Baule-Escoublac Airport","gpsCode":"LFRE","municipality":"La Baule-Escoublac","code":"GANR","long":118.8719394,"lat":31.7338222,"elevation":"105","image":"http://dummyimage.com/201x246.png/5fa2dd/ffffff"},
    {"id":"39b1844d-7c39-4917-aae7-f35fd37e18ef","name":null,"gpsCode":"GMMY","municipality":null,"code":null,"long":-43.0129853,"lat":-21.5367935,"elevation":"16","image":"http://dummyimage.com/222x245.png/ff4444/ffffff"},
    {"id":"6fc325c8-2f39-4a84-9610-4bb6f3e3fc23","name":"Tchien Airport","gpsCode":"GLTN","municipality":"Tchien","code":"AGAT","long":137.9224387,"lat":34.7465855,"elevation":"790","image":"http://dummyimage.com/217x219.png/5fa2dd/ffffff"},
    {"id":"d473af4e-2482-4057-a907-015161b5673e","name":"Kuusamo Airport","gpsCode":"EFKS","municipality":"Kuusamo","code":"MYAF","long":32.262317,"lat":48.507933,"elevation":"866","image":"http://dummyimage.com/203x237.png/ff4444/ffffff"},
    {"id":"e9735089-898a-49f3-89a5-8cfa3bda1800","name":"C David Campbell Field Corsicana Municipal Airport","gpsCode":"KCRS","municipality":"Corsicana","code":"KEKN","long":15.6777494,"lat":46.4536674,"elevation":"449","image":"http://dummyimage.com/238x247.png/5fa2dd/ffffff"},
    {"id":"b2033c4b-972b-47ab-aea1-bc978648bebc","name":"Lo??inj Island Airport","gpsCode":"LDLO","municipality":"Lo??inj","code":"KMMH","long":112.007814,"lat":23.07555,"elevation":"151","image":"http://dummyimage.com/229x250.png/cc0000/ffffff"},
    {"id":"be8e711c-f806-43f7-adc2-855e6587f47f","name":"Klokovo Airfield","gpsCode":"UUBT","municipality":"Tula","code":"KEYW","long":105.266667,"lat":13.216667,"elevation":"499","image":"http://dummyimage.com/217x229.png/cc0000/ffffff"},
    {"id":"02ceca94-9498-4353-8229-63882fcd4774","name":null,"gpsCode":"OPWN","municipality":"Waana","code":null,"long":112.341117,"lat":27.33699,"elevation":"4550","image":"http://dummyimage.com/230x213.png/5fa2dd/ffffff"},
    {"id":"129a7789-ea17-463b-a3fd-fb2b2336dbcb","name":"Dimapur Airport","gpsCode":"VEMR","municipality":"Dimapur","code":"KHGR","long":46.638308,"lat":41.603085,"elevation":"487","image":"http://dummyimage.com/230x227.png/ff4444/ffffff"},
    {"id":"c66f6e98-9b5f-42c7-8d40-491dc4cdc288","name":"Lonely Air Station","gpsCode":"PALN","municipality":"Lonely","code":"OOBR","long":112.8915932,"lat":30.5211502,"elevation":"17","image":"http://dummyimage.com/239x216.png/5fa2dd/ffffff"},
    {"id":"e5ca514d-2202-43c0-9b8b-8a5b6c70ed9b","name":"Naples Municipal Airport","gpsCode":"KAPF","municipality":"Naples","code":"HTLI","long":-49.4745059,"lat":-28.7477963,"elevation":"8","image":"http://dummyimage.com/242x244.png/5fa2dd/ffffff"},
    {"id":"385fb1ff-7771-411d-8e8c-0fc2a1968f84","name":null,"gpsCode":"PAMM","municipality":"Metlakatla","code":null,"long":11.6764538,"lat":58.3767785,"elevation":null,"image":"http://dummyimage.com/249x250.png/dddddd/000000"},
    {"id":"127ccb4b-8f90-4466-b65d-1048e8a1410a","name":"Les Cayes Airport","gpsCode":"MTCA","municipality":"Les Cayes","code":"KS98","long":116.4442945,"lat":39.9368237,"elevation":"203","image":"http://dummyimage.com/209x244.png/ff4444/ffffff"},
    {"id":"bddfbff8-cb10-4a61-9d21-eb5eb877144f","name":"Amderma Airport","gpsCode":"ULDD","municipality":"Amderma","code":"HAHM","long":73.02329,"lat":34.67719,"elevation":"13","image":"http://dummyimage.com/244x233.png/ff4444/ffffff"},
    {"id":"b6c47470-866e-4ff2-b3f6-d83106be67e5","name":"Comandante FAP German Arias Graziani Airport","gpsCode":"SPHZ","municipality":"Anta","code":null,"long":113.440958,"lat":22.358169,"elevation":"9097","image":"http://dummyimage.com/221x208.png/dddddd/000000"},
    {"id":"a8d5e738-f761-4417-8f1b-b6b18172555a","name":"Shepparton Airport","gpsCode":"YSHT","municipality":null,"code":"WADA","long":120.5849792,"lat":15.1487342,"elevation":"374","image":"http://dummyimage.com/232x234.png/cc0000/ffffff"},
    {"id":"caf985dc-c733-4a14-bd75-1b02cc3ca1ab","name":"Kanainj Airport","gpsCode":"AYKJ","municipality":"Kanainj","code":"SNFO","long":108.777742,"lat":29.299853,"elevation":"4064","image":"http://dummyimage.com/239x239.png/cc0000/ffffff"},
    {"id":"8c87b208-d44c-423e-85be-6b85ec115f83","name":"Gorna Oryahovitsa Airport","gpsCode":"LBGO","municipality":"Gorna Oryahovitsa","code":"SBTT","long":112.851831,"lat":35.490701,"elevation":"285","image":"http://dummyimage.com/240x207.png/ff4444/ffffff"}
];



function Airport({name, gpsCode, municipality, code, image, lat, long}: AirportPropsTypes) {
    const [isFavourite, setIsFavourite] = useState(false);
    const handleClick = () => {
        setIsFavourite(!isFavourite);
    }


    if (isFavourite) {
        return (
            <div>
                <h2>{name}</h2>
                <p>{gpsCode}</p>
                <p>{municipality}</p>
                <p>{code}</p>
                <img src={image} alt={name}/>
                <button onClick={handleClick}>unfavorite</button>

            </div>
        );//<button onClick={alert([lat, long])}>zobrazit sou??adnice</button>
    }
    return (
        <div>
            <h2>{name}</h2>
            <p>{gpsCode}</p>
            <p>{municipality}</p>
            <p>{code}</p>
            <img src={image} alt={name}/>
            <button onClick={handleClick}>mark as favourite</button>
        </div>
    );
}


function App() {
    return (
        <div>
            <h2>Obl??ben?? leti??t??</h2>
            <div>
                {data.map((data) => <Airport name={data.name} gpsCode={data.gpsCode} municipality={data.municipality} code={data.code} image={data.image} lat={data.lat} long={data.long}/>}
            </div>

            <h2>V??echna leti??t??</h2>


        </div>
    );
}

export default App;