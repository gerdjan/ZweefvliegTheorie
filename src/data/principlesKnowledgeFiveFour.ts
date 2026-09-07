import type { SourceReference } from '../domain/types'
import type { KnowledgeChapter, KnowledgeElement } from './principlesKnowledgeIndex'

const b=(page:number,section:string,pageEnd?:number):SourceReference=>({
  file:'5-Beginselen.pdf',
  page,
  ...(pageEnd?{pageEnd}:{}),
  section,
})

const e=(id:string,title:string,meaning:string,source:SourceReference,lessonIds:string[]=[]):KnowledgeElement=>({id,title,meaning,source,lessonIds})

export const principlesKnowledgeFiveFour:KnowledgeChapter = {
  id:'5.4',
  title:'5.4 · Besturingssysteem',
  auditCovered:27,
  auditTotal:27,
  auditComplete:true,
  elements:[
    e('5-4-three-axes','Besturing om drie assen','Een zweefvliegtuig moet gecontroleerd kunnen bewegen om topas, dwarsas en langsas; daarvoor gebruikt het richtingsroer, hoogteroer en rolroeren.',b(30,'§5.4 Besturingssysteem',31),['principles-5-4-controls']),
    e('5-4-elevator','Hoogteroer en stampen','Het hoogteroer bestuurt de beweging om de dwarsas. Knuppel naar voren laat de neus zakken en de snelheid oplopen; knuppel naar achteren doet het omgekeerde.',b(31,'§5.4.1 Het hoogteroer, stampen'),['principles-5-4-controls']),
    e('5-4-lever-arm','Moment en lange roerarm','Het hoogteroer ligt ver van de dwarsas en het richtingsroer ver van de topas. Door de grote arm kan een relatief kleine roerkracht toch een bruikbaar stuurmoment leveren.',b(31,'§5.4.1 Het hoogteroer, stampen'),['principles-5-4-control-geometry']),
    e('5-4-tail-types','T-staart, conventionele staart, V-staart en pendelroer','Bij een T-staart staat het stabilo boven op het kielvlak; bij een conventionele staart lager. Een V-staart combineert hoogte- en richtingsroerfuncties; bij een pendelroer beweegt het hele horizontale staartvlak.',b(31,'§5.4.1 Staartvormen'),['principles-5-4-controls','principles-5-4-control-geometry']),
    e('5-4-ailerons','Rolroeren en rollen','Tegengestelde rolroeruitslagen veranderen links en rechts de lift en laten het vliegtuig om de langsas rollen.',b(31,'§5.4.2 De rolroeren, rollen'),['principles-5-4-controls']),
    e('5-4-rudder','Richtingsroer en gieren','Het voetenstuur bedient het richtingsroer en veroorzaakt een giermoment om de topas.',b(31,'§5.4.3 Het richtingsroer, gieren'),['principles-5-4-controls','principles-5-4-control-geometry']),
    e('5-4-yaw-roll','Neveneffect van gieren: rollen','Bij gieren legt de buitenvleugel een langere weg af, beweegt sneller en levert meer lift dan de binnenvleugel. Daardoor ontstaat rollen als neveneffect.',b(31,'§5.4.4 Neveneffecten',32),['principles-5-4-secondary-effects','principles-5-4-coordination-trim-detail']),
    e('5-4-roll-yaw','Neveneffect van dwarshelling: gieren','Bij dwarshelling glijdt het toestel naar de lage vleugel; het kielvlak wordt van opzij aangeblazen en veroorzaakt een giermoment.',b(32,'§5.4.4 Neveneffect van dwarshelling'),['principles-5-4-secondary-effects']),
    e('5-4-adverse-yaw','Haakeffect','Het omlaaggaande rolroer veroorzaakt meer lift maar ook meer weerstand. Daardoor wil de neus aanvankelijk naar de hoge vleugel gieren.',b(32,'§5.4.5 Haakeffect'),['principles-5-4-secondary-effects']),
    e('5-4-differential','Differentiaalrolroeren','Differentiaalrolroeren verkleinen het haakeffect doordat het omhooggaande rolroer verder uitslaat dan het omlaaggaande rolroer.',b(32,'§5.4.5 Haakeffect'),['principles-5-4-secondary-effects']),
    e('5-4-coordination','Gecoördineerd sturen','Voor een zuivere bocht gebruik je stuurknuppel voor de helling en voetenstuur om het haakeffect en andere gierneveneffecten passend te corrigeren.',b(32,'§5.4.5 Haakeffect'),['principles-5-4-coordination-trim-detail']),
    e('5-4-trim-purpose','Doel van trim','Trim neemt de voortdurende tegendruk of duwkracht op de stuurknuppel weg, zodat het toestel ongeveer de gekozen snelheid blijft vliegen zonder constante stuurkracht.',b(32,'§5.4.6 De trim',33),['principles-5-4-secondary-effects']),
    e('5-4-trim-weight-speed','Trim, vliegergewicht en snelheid','De benodigde stuurkracht en trimstand hangen onder meer samen met vliegergewicht en gekozen vliegsnelheid. Een andere belasting voorin of hogere snelheid kan een andere triminstelling vragen.',b(32,'§5.4.6 De trim',33),['principles-5-4-coordination-trim-detail']),
    e('5-4-trim-types','Trimvlak en veertrim','Het dictaat beschrijft twee trimmethoden: een verstelbaar trimvlakje aan het hoogteroer en een veertrim die via veerspanning kracht op de stuurknuppel uitoefent.',b(33,'§5.4.6 De trim'),['principles-5-4-secondary-effects']),
  ],
}
