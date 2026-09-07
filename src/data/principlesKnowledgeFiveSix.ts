import type { SourceReference } from '../domain/types'
import type { KnowledgeChapter, KnowledgeElement } from './principlesKnowledgeIndex'

const b=(page:number,section:string,pageEnd?:number):SourceReference=>({
  file:'5-Beginselen.pdf',
  page,
  ...(pageEnd?{pageEnd}:{}),
  section,
})

const e=(id:string,title:string,meaning:string,source:SourceReference,lessonIds:string[]=[]):KnowledgeElement=>({id,title,meaning,source,lessonIds})

export const principlesKnowledgeFiveSix:KnowledgeChapter = {
  id:'5.6',
  title:'5.6 · Overtrek en vrille',
  auditCovered:30,
  auditTotal:30,
  auditComplete:true,
  elements:[
    e('5-6-stall-definition','Overtrek en kritische invalshoek','Een overtrek ontstaat wanneer de invalshoek zo groot wordt dat de stroming de bovenzijde van het profiel niet meer kan volgen. Lift neemt af en weerstand neemt sterk toe.',b(37,'§5.6.1 Overtrek'),['principles-5-6-stall']),
    e('5-6-stall-effects','Vier gevolgen van de overtrek','De bron noemt afname van draagkracht, sterke weerstandstoename met schudden, een moment om de dwarsas en bij asymmetrie ook momenten om langs- en topas.',b(37,'§5.6.1 Gevolgen van de overtrek'),['principles-5-6-stall']),
    e('5-6-washout-root-stall','Wrong en overtrek bij de wortel','Door de kleinere instelhoek naar de tip toe treedt overtrek in de regel eerst naast de romp op. Losgelaten wervels kunnen romp en staart treffen en schudden veroorzaken.',b(37,'§5.6.1 Gevolgen van de overtrek · wrong'),['principles-5-6-stall-signals']),
    e('5-6-pressure-point','Drukpuntverschuiving bij overtrek','Bij overtrek beschrijft het dictaat een plotselinge drukpuntverschuiving naar achteren, tot achter het zwaartepunt. Dat veroorzaakt een herstellend neus-omlaagmoment.',b(37,'§5.6.1 Gevolgen van de overtrek · moment om de dwarsas'),['principles-5-6-stall-signals']),
    e('5-6-stall-warning-signals','Waarschuwingssignalen voor overtrek','Ver getrokken stuurknuppel, hoge neusstand, stil worden, slappe roeren/kleine stuurkrachten en schudden zijn de vijf expliciet genoemde signalen.',b(37,'§5.6.1 Waarschuwingssignalen'),['principles-5-6-stall-signals']),
    e('5-6-increased-stall-speed','Verhoogde overtreksnelheid','De bron waarschuwt voor een hogere overtreksnelheid bij lierstart, steilere bochten, waterballast, turbulentie/onrustige thermiek en natte of vuile vleugels.',b(37,'§5.6.1 Verhoogde overtreksnelheid'),['principles-5-6-stall']),
    e('5-6-stall-precautions','Voorzorgsmaatregelen overtrekoefening','Geen losse voorwerpen, riemen vast, trim op normale vliegsnelheid; niet boven bebouwde kom of mensenmassa en liever niet tegen de zon in.',b(37,'§5.6.1 Voorzorgsmaatregelen oefening overtrek'),['principles-5-6-stall-exercise']),
    e('5-6-lookout','Uitkijkprocedure','Voor de overtrekoefening beschrijft het dictaat een uitkijkbocht met twee halve cirkels om onder het toestel te controleren.',b(37,'§5.6.1 Uitvoering overtrekoefening'),['principles-5-6-stall-exercise']),
    e('5-6-immediate-recovery','Direct vieren en snelheid opnemen','Bij het bereiken van de overtrek wordt de stuurknuppel direct gevierd. Als dat meteen gebeurt, hoeft volgens de bron niet diep gedoken te worden.',b(37,'§5.6.1 Uitvoering · herstel',38),['principles-5-6-stall','principles-5-6-stall-exercise']),
    e('5-6-neutral-controls','Voeten en rol neutraal bij herstel','Tijdens herstel houdt de vlieger volgens het dictaat de voeten neutraal en de stuurknuppel niet links of rechts; eerst invalshoek verkleinen en snelheid opnemen.',b(38,'§5.6.1 Herstelprocedure overtrek'),['principles-5-6-stall','principles-5-6-stall-exercise']),
    e('5-6-deep-stall-descent','Zakvlucht','Sommige goedige toestellen gaan bij aangehouden getrokken knuppel over in een sterk dalende, schuddende vlucht. Het dictaat noemt dit een zakvlucht.',b(38,'§5.6.1 Herstelprocedure overtrek · zakvlucht'),['principles-5-6-stall-exercise']),
    e('5-6-turn-stall-objectives','Leerdoelen overtrek in schuivende bocht','Meer helling vraagt meer snelheid; de bron benadrukt coördinatie, herkenning van de voorfase, lage bochten vermijden, gedrag ervaren en herstel automatiseren.',b(38,'§5.6.1 Overtrek in een schuivende bocht · doel van de oefening'),['principles-5-6-turn-stall']),
    e('5-6-skidding-turn-risk','Schuivende bocht en beginnende tolvlucht','Bij te weinig snelheid, te weinig dwarshelling en te veel voetenstuur kan de binnenvleugel eerst overtrekken. Minder lift en meer weerstand aan die kant zetten een tolvlucht in.',b(38,'§5.6.1 Overtrek in een schuivende bocht'),['principles-5-6-turn-stall','principles-5-6-spin']),
    e('5-6-turn-stall-recovery','Herstel dreigende overtrek in een bocht','Bij te hoge neus, te lage snelheid en slappe roeren direct de stuurknuppel vieren. Een wegzakkende binnenvleugel niet met rolroer tegen optillen; eerst snelheid opnemen.',b(38,'§5.6.1 Herstel dreigende overtrek in een bocht'),['principles-5-6-turn-stall']),
    e('5-6-spin-definition','Tolvlucht / vrille','Een tolvlucht is een overtrokken toestand waarbij het toestel over één vleugel wegvalt en in een verticale schroefvormige baan om de topas draaiend daalt.',b(38,'§5.6.2 Tolvlucht',39),['principles-5-6-spin-mechanics']),
    e('5-6-spin-entry','Ontstaan van een tolvlucht','De bron noemt langzaam vliegen dicht bij de overtreksnelheid gecombineerd met te veel voetenstuur en een plotselinge gierbeweging als mogelijke aanleiding.',b(38,'§5.6.2 Ontstaan van een tolvlucht'),['principles-5-6-spin-mechanics']),
    e('5-6-spin-inner-wing','Binnenvleugel overtrokken','Tijdens de tolvlucht is volgens het dictaat de binnenvleugel overtrokken. Een neergaand rolroer op die vleugel vergroot de invalshoek verder en werkt daarom averechts.',b(38,'§5.6.1 Overtrek in een schuivende bocht',39),['principles-5-6-spin','principles-5-6-spin-safety']),
    e('5-6-spin-rudder','Richtingsroer blijft werkzaam','Hoewel de binnenvleugel overtrokken is, noemt de bron het richtingsroer nog volledig werkzaam; dit verklaart de centrale rol van het richtingsroer bij herstel.',b(39,'§5.6.2 Tolvlucht · roerwerking'),['principles-5-6-spin-mechanics']),
    e('5-6-neutral-recovery','Neutrale roeren en herstelgedrag','Het dictaat vermeldt dat de meeste zweefvliegtuigen moeilijk in tolvlucht te krijgen zijn en al herstellen wanneer de roeren neutraal worden gezet.',b(39,'§5.6.2 Tolvlucht · neutrale roeren'),['principles-5-6-spin-mechanics']),
    e('5-6-spin-inside-check','Veiligheidsprocedure binnen','Geen losse voorwerpen, riemen goed vast, kleppen gelocked en trim op normale snelheid.',b(39,'§5.6.2 Veiligheidsprocedure · binnen'),['principles-5-6-spin-safety']),
    e('5-6-spin-outside-check','Veiligheidsprocedure buiten','Twee halve cirkels voor uitkijk, voldoende hoogte, een oriëntatiepunt en niet boven publiek of bebouwde kom.',b(39,'§5.6.2 Veiligheidsprocedure · buiten'),['principles-5-6-spin-safety']),
    e('5-6-spin-height','Hoogteverlies en oefengrens','De bron noemt circa 80 meter hoogteverlies per volledige draai en zegt dat het zweefvliegtuig rond 300 meter hoogte uit de tolvlucht moet zijn.',b(39,'§5.6.2 In een tolvlucht brengen · hoogtemarge'),['principles-5-6-spin-safety']),
    e('5-6-spin-standard-recovery','Standaardherstel tolvlucht','Vol richtingsroer tegen de draairichting, hoogteroer naar neutraal, rolroer neutraal; na stoppen van de draaiing richtingsroer neutraal en beheerst uit de duikvlucht optrekken.',b(39,'§5.6.2 Uit een tolvlucht halen'),['principles-5-6-spin','principles-5-6-spin-safety']),
    e('5-6-spin-type-specific','Type-afhankelijkheid en vlieghandboek','Het dictaat waarschuwt dat tolvluchteigenschappen, inzet en herstel per type kunnen verschillen; bij een onbekend type moet het vlieghandboek eerst worden geraadpleegd.',b(39,'§5.6.2 N.B. type-afhankelijkheid'),['principles-5-6-spin','principles-5-6-spin-safety']),
  ],
}
