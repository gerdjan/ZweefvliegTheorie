import type { SourceReference } from '../domain/types'
import type { KnowledgeChapter, KnowledgeElement } from './principlesKnowledgeIndex'

const b=(page:number,section:string,pageEnd?:number):SourceReference=>({
  file:'5-Beginselen.pdf',
  page,
  ...(pageEnd?{pageEnd}:{}),
  section,
})

const e=(id:string,title:string,meaning:string,source:SourceReference,lessonIds:string[]=[]):KnowledgeElement=>({id,title,meaning,source,lessonIds})

export const principlesKnowledgeFiveSeven:KnowledgeChapter = {
  id:'5.7',
  title:'5.7 · Spiraalduik',
  auditCovered:10,
  auditTotal:10,
  auditComplete:true,
  elements:[
    e('5-7-definition','Spiraalduik versus tolvlucht','Een tolvlucht is overtrokken en heeft relatief lage snelheid; een spiraalduik is niet overtrokken en gaat gepaard met veel hogere snelheid.',b(39,'§5.7 Spiraalduik'),['principles-5-7-spiral-dive']),
    e('5-7-cause','Ontstaan door neus laten zakken','Een spiraalduik kan ontstaan wanneer bij het inzetten van een bocht niet of te laat aan de stuurknuppel wordt getrokken om de neus op de horizon te houden. De snelheid loopt dan op.',b(39,'§5.7 Spiraalduik'),['principles-5-7-dynamics-detail']),
    e('5-7-recognition','Herkennen aan oplopende snelheid','Als je steil draait en trekken de snelheid niet meer vermindert, maar snelheid en g juist oplopen, beschrijft de bron dat als spiraalduik.',b(39,'§5.7 Spiraalduik',40),['principles-5-7-spiral-dive','principles-5-7-dynamics-detail']),
    e('5-7-pull-effect','Verder trekken verkleint de bochtstraal','Alleen harder trekken kan in de spiraalduik de cirkel kleiner maken en snelheid en g-belasting verder verhogen in plaats van de snelheid terug te brengen.',b(39,'§5.7 Spiraalduik',40),['principles-5-7-dynamics-detail']),
    e('5-7-recovery-first','Eerst g verminderen','De eerste genoemde herstelstap is de stuurknuppel iets naar voren te doen om de g-belasting te verminderen.',b(40,'§5.7 Herstel spiraalduik'),['principles-5-7-spiral-dive','principles-5-7-load-practice']),
    e('5-7-recovery-roll','Horizontaal rollen en daarna uittrekken','Na het verminderen van de g-belasting wordt het vliegtuig horizontaal gerold en daarna voorzichtig uit de duikvlucht opgetrokken.',b(40,'§5.7 Herstel spiraalduik'),['principles-5-7-spiral-dive','principles-5-7-load-practice']),
    e('5-7-high-g','Steile helling en hoge g-belasting','De bron noemt ongeveer 2g bij 60° dwarshelling en circa 5g rond 80°. Een abrupte ruk aan de stuurknuppel kan in die toestand overbelasting veroorzaken.',b(40,'§5.7 Spiraalduik · g-krachten'),['principles-5-7-dynamics-detail']),
    e('5-7-airbrake-load','Remkleppen veranderen de belastingscontext','De bron noemt normaal minimaal circa +5,3g positieve ontwerpbelasting en bij veel typen rond +3,5g als lagere maximale belasting met geopende remkleppen, omdat de liftverdeling verandert.',b(40,'§5.7 Spiraalduik · liftverdeling en remkleppen'),['principles-5-7-load-practice']),
    e('5-7-airbrake-warning','Geen spiraalduik met geopende remkleppen volgens dit dictaat','Het dictaat waarschuwt expliciet geen spiraalduik met geopende remkleppen te vliegen omdat de maximale toegestane belastingfactor dan gemakkelijker kan worden overschreden.',b(40,'§5.7 Spiraalduik · remkleppen'),['principles-5-7-spiral-dive','principles-5-7-load-practice']),
    e('5-7-practice','Oefenen voor vroege herkenning','Regelmatig oefenen van overtrek, tolvlucht en spiraalduik helpt volgens de bron om eerste symptomen vroeg te herkennen en het juiste herstel vrijwel instinctief uit te voeren.',b(40,'§5.7 Spiraalduik · oefendoel'),['principles-5-7-load-practice']),
  ],
}
