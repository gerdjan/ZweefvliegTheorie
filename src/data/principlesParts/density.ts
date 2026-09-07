import type { SourcedUnit } from '../../domain/types'
import { b, q, t } from './helpers'

export const units:SourcedUnit[] = [
  {
    id:'principles-5-1-air-density',
    title:'5.1 · Luchtdichtheid',
    lesson:{
      id:'principles-5-1-air-density',
      title:'Luchtdichtheid en draagkracht',
      description:'De invloed van luchtdruk, temperatuur en hoogte op de luchtdichtheid ρ.',
      minScore:80,
      steps:[
        t('Waar luchtdichtheid van afhangt','De luchtdichtheid is volgens het dictaat afhankelijk van de luchtdruk en de temperatuur. Een hogere druk vergroot bij gelijke temperatuur de dichtheid; warmere lucht zet uit en heeft bij gelijke druk een lagere dichtheid.',b(12,'§5.1.1.5 De luchtdichtheid')),
        q('Van welke twee grootheden is de luchtdichtheid volgens §5.1.1.5 afhankelijk?',['Luchtdruk en temperatuur','Spanwijdte en koorde','Grondsnelheid en windrichting','Gewicht en dwarshelling'],0,'Het dictaat noemt luchtdruk en temperatuur als bepalende grootheden voor de luchtdichtheid.',b(12,'§5.1.1.5 De luchtdichtheid')),
        t('Met de hoogte','Met toenemende hoogte neemt de luchtdruk af. De temperatuur neemt in het beschreven hoogtegebied eveneens af; die lagere temperatuur werkt de afname van de luchtdichtheid gedeeltelijk tegen. In de tabel van het dictaat neemt de luchtdichtheid per saldo met de hoogte af.',b(12,'§5.1.1.5 De luchtdichtheid')),
        q('Wat laat de tabel bij §5.1.1.5 voor toenemende hoogte per saldo zien?',['De luchtdichtheid neemt af','De luchtdichtheid blijft exact gelijk','De luchtdichtheid neemt steeds toe','Alleen het vleugeloppervlak verandert'],0,'In de tabel daalt de luchtdichtheid met toenemende hoogte; de lagere temperatuur remt die afname, maar keert haar niet om.',b(12,'§5.1.1.5 De luchtdichtheid')),
        t('Thermiekbel','Wanneer een thermiekbel stijgt, zet de lucht uit en wordt de luchtdichtheid kleiner. Dit is één van de redenen waarom ρ als factor in de liftformule staat.',b(12,'§5.1.1.5 De luchtdichtheid')),
      ],
    },
  },
]
