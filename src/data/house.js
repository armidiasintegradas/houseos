export const rooms=[
{id:'HOS-A01',name:'Lavanderia',area:11,status:'mapped',devices:['HOS-D001','HOS-D002','HOS-D003','HOS-D004','HOS-D005','HOS-D006']},
{id:'HOS-A02',name:'Cozinha',area:4.7,status:'mapped',devices:['HOS-D007','HOS-D008','HOS-D009','HOS-D010','HOS-D011']},
{id:'HOS-A03',name:'Banheiro da Suíte',area:3,status:'mapped',devices:['HOS-D012','HOS-D013']},
{id:'HOS-A04',name:'Quarto 1',area:10,status:'mapped',devices:['HOS-D014','HOS-D015']},
{id:'HOS-A05',name:'Quarto 2',area:8.1,status:'mapped',devices:['HOS-D016','HOS-D017','HOS-D018']},
{id:'HOS-A06',name:'Banheiro Social',area:4.7,status:'mapped',devices:['HOS-D019']},
{id:'HOS-A07',name:'Sala de Jantar',area:8.2,status:'mapped',devices:['HOS-D020','HOS-D021']},
{id:'HOS-A08',name:'Sala',area:19,status:'mapped',devices:['HOS-D022','HOS-D023','HOS-D024','HOS-D025']},
{id:'HOS-A09',name:'Circulação',area:19,status:'mapped',devices:['HOS-D026','HOS-D027']},
{id:'HOS-A10',name:'Área externa',area:49,status:'provisional',devices:[]},
{id:'HOS-A11',name:'Extensão da sala',area:6.2,status:'provisional',devices:[]},
{id:'HOS-A12',name:'Nicho externo',area:.9,status:'provisional',devices:[]},
{id:'HOS-A13',name:'Closet',area:.9,status:'provisional',devices:[]},
{id:'HOS-A14',name:'Garagem / Portão',area:null,status:'provisional',devices:['HOS-D028','HOS-D029','HOS-D032']},
{id:'HOS-A15',name:'Pátio de serviço / Jardim',area:null,status:'provisional',devices:['HOS-D030','HOS-D031']}
];
export const circuits=[
{id:'DJ-00',rating:'C40',name:'Geral',state:'confirmed'},
{id:'DJ-01',rating:'C20',name:'Bomba da lavanderia',state:'confirmed'},
{id:'DJ-02',rating:'C20',name:'Chuveiro da suíte',state:'confirmed'},
{id:'DJ-03',rating:'C16',name:'Sala + corredor · iluminação e tomadas',state:'confirmed'},
{id:'DJ-04',rating:'C16',name:'Chuveiro social',state:'confirmed'},
{id:'DJ-05',rating:'C25',name:'A identificar',state:'pending'},
{id:'DJ-06',rating:'C20',name:'A identificar',state:'pending'},
{id:'DJ-07',rating:'C20',name:'A identificar',state:'pending'},
{id:'DJ-08',rating:'C16',name:'A identificar',state:'pending'}
];
export const layers=['Todos','Luzes','Clima','Energia','Água','Segurança'];