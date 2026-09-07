import type { SourceReference } from '../domain/types'
import type { KnowledgeChapter, KnowledgeElement } from './principlesKnowledgeIndex'

const b=(page:number,section:string,pageEnd?:number):SourceReference=>({
  file:'5-Beginselen.pdf',
  page,
  ...(pageEnd?{pageEnd}:{}),
  section,
})

const e=(id:string,title:string,meaning:string,source:SourceReference,lessonIds:string[]=[]):KnowledgeElement=>({id,title,meaning,source,lessonIds})

export const principlesKnowledgeFiveThree:KnowledgeChapter = {
  id:'5.3',
  title:'5.3 · Stabiliteit',
  auditCovered:21,
  auditTotal:21,
  auditComplete:true,
  elements:[
    e('5-3-definitions','Stabiel, onstabiel en indifferent','Stabiel betekent terugkeer naar de oorspronkelijke evenwichtstoestand; onstabiel betekent dat de afwijking groter wordt; indifferent betekent dat na de verstoring een nieuwe evenwichtstoestand ontstaat.',b(28,'§5.3 Stabiliteit'),['principles-5-3-stability']),
    e('5-3-small-disturbance','Kleine en grote verstoringen','Bij een kleine verstoring hoort een stabiel zweefvliegtuig zichzelf te herstellen. Bij een grotere verstoring moet de vlieger met de stuurorganen de gewenste vliegtoestand herstellen.',b(28,'§5.3 Stabiliteit'),['principles-5-3-stability-detail']),
    e('5-3-controllability','Stabiliteit en bestuurbaarheid','Het toestel moet gewenste vliegtoestanden gemakkelijk bestuurbaar maken en ongewenste afwijkingen voldoende snel herstelbaar houden; stabiliteit ondersteunt de vlieger maar vervangt het sturen niet.',b(28,'§5.3 Stabiliteit'),['principles-5-3-stability-detail']),
    e('5-3-cg-limits','Stabiliteit en zwaartepuntgrenzen','De beschreven stabiliteit veronderstelt dat het zwaartepunt binnen de door de fabrikant vastgestelde grenzen ligt. Te neuslastig of te staartlastig beladen kan volgens de bron onstabiel gedrag geven.',b(28,'§5.3 Stabiliteit'),['principles-5-3-stability-detail']),
    e('5-3-three-directions','Drie stabiliteitsrichtingen','Langsstabiliteit werkt om de dwarsas, richtingsstabiliteit om de topas en rolstabiliteit om de langsas.',b(28,'§5.3 Stabiliteit'),['principles-5-3-stability','principles-5-3-stability-detail']),
    e('5-3-longitudinal','Langsstabiliteit','Het horizontale stabilo levert een herstellend moment bij een verstoring van de neusstand om de dwarsas.',b(28,'§5.3.1 Langsstabiliteit',29),['principles-5-3-stability']),
    e('5-3-thermal-stabilo','Thermiek, turbulentie en het stabilo','Verandert de aanstroming de invalshoek van vleugel en stabilo, dan verandert ook hun draagkracht. Het stabilo levert daarbij een herstellend moment dat de neusafwijking tegenwerkt.',b(29,'§5.3.1 Langsstabiliteit'),['principles-5-3-longitudinal-washout-detail']),
    e('5-3-directional','Richtingsstabiliteit en weerhaaneffect','Na een richtingsverstoring wordt het kielvlak van opzij aangeblazen. De ontstane kracht en het moment om het zwaartepunt draaien het vliegtuig terug naar de oorspronkelijke koers.',b(29,'§5.3.2 Richtingsstabiliteit'),['principles-5-3-stability','principles-5-3-direction-roll-detail']),
    e('5-3-sweep','Pijlvorm en richtingsstabiliteit','Positieve pijlvorm kan het koersherstel ondersteunen. Negatieve pijlvorm is volgens het dictaat minder gunstig, waardoor het kielvlak meer corrigerende kracht moet leveren.',b(29,'§5.3.2 Richtingsstabiliteit'),['principles-5-3-direction-roll-detail']),
    e('5-3-roll','Rolstabiliteit en V-stelling','Na een rolverstoring glijdt het toestel naar de lage vleugel. Door V-stelling wordt die vleugel gunstiger aangestroomd en krijgt zij een grotere invalshoek en meer lift.',b(29,'§5.3.3 Rolstabiliteit',30),['principles-5-3-stability','principles-5-3-direction-roll-detail']),
    e('5-3-lift-vector','Liftvector als tweede rolherstel','Omdat lift loodrecht op de vleugel staat, komt de lift van de lage vleugel na een rolverstoring meer tegenover de zwaartekracht te staan. Ook dat draagt bij aan het herstellende rolmoment.',b(30,'§5.3.3 Rolstabiliteit'),['principles-5-3-direction-roll-detail']),
    e('5-3-stabilo-incidence','Instelhoek van het stabilo','De instelhoek van het stabilo is kleiner dan die van de vleugel. Bij overtrek zakt de neus, neemt de snelheid toe en wordt de invalshoek van de vleugel weer kleiner, waardoor de draagkracht kan herstellen.',b(30,'§5.3.4 Instelhoek en wrong'),['principles-5-3-longitudinal-washout-detail']),
    e('5-3-washout','Wrong en overtrekgedrag','Bij wrong neemt de instelhoek naar de tip af. Daardoor overtrekt de vleugel doorgaans eerst bij de wortel en later bij de tip, zodat de rolroeren langer effectief blijven.',b(30,'§5.3.4 Instelhoek en wrong'),['principles-5-3-stability','principles-5-3-longitudinal-washout-detail']),
    e('5-3-washout-induced','Wrong, liftverdeling en geïnduceerde weerstand','De afnemende invalshoek naar de tip geeft volgens het dictaat een gunstiger, meer ellipsvormige liftverdeling. Dat vermindert de geïnduceerde weerstand.',b(30,'§5.3.4 Instelhoek en wrong'),['principles-5-3-longitudinal-washout-detail']),
  ],
}
