import type { SourcedUnit } from '../../domain/types'
import { b, q, study, t } from './helpers'

export const units:SourcedUnit[] = [
  {
    id:'principles-5-7-dynamics-detail',
    title:'5.7 · Ontstaan en dynamiek van de spiraalduik',
    lesson:{
      id:'principles-5-7-dynamics-detail',
      title:'Waarom een spiraalduik zichzelf kan versterken',
      description:'Neusstand, snelheid, bochtstraal en g-belasting in één oorzaak-gevolgketen.',
      minScore:80,
      steps:[
        t('Hoe een spiraalduik kan ontstaan','Een spiraalduik kan volgens het dictaat ontstaan wanneer je bij het inzetten van een bocht niet of te laat aan de stuurknuppel trekt om de neus op de horizon te houden. De neus zakt en de snelheid loopt op.',b(39,'§5.7 Spiraalduik')),
        q('Welke fout noemt het dictaat als mogelijke aanleiding voor een spiraalduik?',['Bij het inzetten van een bocht niet of te laat aan de stuurknuppel trekken','Bij rechtuit vliegen de trim exact neutraal zetten','Bij een bocht op tijd voldoende aan de stuurknuppel trekken','Een te lage QNH instellen'],0,'Als de neus in de bocht zakt doordat niet of te laat wordt getrokken, kan de snelheid oplopen en de situatie in een spiraalduik overgaan.',b(39,'§5.7 Spiraalduik'),study(2,'§5.6 Overtrek en Vrille / spiraalduik')),
        t('Verder trekken helpt niet','In een normale duik vermindert trekken de snelheid doordat de neus omhoog komt. In een spiraalduik kan verder trekken juist de bochtstraal verkleinen: de snelheid loopt verder op en de g-krachten nemen toe.',b(39,'§5.7 Spiraalduik',40)),
        q('Wat kan er gebeuren als je in een spiraalduik alleen maar harder aan de stuurknuppel trekt?',['De bochtstraal wordt kleiner terwijl snelheid en g-belasting toenemen','De snelheid neemt altijd direct af','Het vliegtuig gaat automatisch uit de bocht','De belastingfactor wordt vanzelf 1g'],0,'Het dictaat waarschuwt dat trekken in deze toestand de cirkel kleiner kan maken, met oplopende snelheid en g-belasting als gevolg.',b(39,'§5.7 Spiraalduik',40),study(2,'§5.6 Overtrek en Vrille / spiraalduik')),
        t('Steile helling en hoge g','Bij 60° dwarshelling noemt het dictaat ongeveer 2g. Boven 60° loopt de belasting snel op; rond 80° noemt de bron ongeveer 5g. Een onbeheerste ruk aan de stuurknuppel kan dan het vliegtuig overbelasten.',b(40,'§5.7 Spiraalduik · g-krachten')),
        q('Waarom moet je na het horizontaal rollen beheerst uit de duik optrekken?',['Omdat een abrupte optrekbeweging bij hoge snelheid en hoge g het vliegtuig kan overbelasten','Omdat de snelheid anders altijd tot nul daalt','Omdat de rolroeren dan niet meer werken','Omdat een spiraalduik per definitie bij 1g plaatsvindt'],0,'De bron koppelt de hoge snelheid en g-belasting aan het risico van structurele overbelasting bij een ruwe optrekbeweging.',b(40,'§5.7 Spiraalduik · g-krachten'),study(2,'§5.6 Overtrek en Vrille / spiraalduik')),
      ],
    },
  },
  {
    id:'principles-5-7-load-practice',
    title:'5.7 · Belastingen, remkleppen en vroeg herkennen',
    lesson:{
      id:'principles-5-7-load-practice',
      title:'Belastingen en herkenning bij een spiraalduik',
      description:'Waarom remkleppen de belastingscontext veranderen en waarom oefenen draait om vroege herkenning.',
      minScore:80,
      steps:[
        t('Ontwerpcontext met remkleppen','Het dictaat verwijst naar minimaal ongeveer +5,3g positieve belasting voor het zweefvliegtuig in de normale ontwerpcontext. Bij veel typen staat volgens de bron in het vlieghandboek een lagere maximale belasting met geopende remkleppen, rond +3,5g, doordat de liftverdeling over de vleugel verandert.',b(40,'§5.7 Spiraalduik · liftverdeling en remkleppen')),
        t('Waarom die grens lager kan zijn','Met geopende remkleppen is de lift niet meer gelijkmatig over de vleugel verdeeld. Rond de remkleppen kan de vleugel daardoor eerder kritisch worden belast. Het dictaat waarschuwt daarom expliciet geen spiraalduik met geopende remkleppen te vliegen.',b(40,'§5.7 Spiraalduik · remkleppen')),
        q('Waarom noemt het dictaat bij geopende remkleppen een lagere belastingscontext?',['Omdat de liftverdeling over de vleugel minder gelijkmatig wordt','Omdat de luchtdichtheid dan nul wordt','Omdat de spanwijdte kleiner wordt','Omdat de zwaartekracht afneemt'],0,'De bron koppelt de lagere belastingsmarge aan de veranderde liftverdeling over de vleugel bij geopende remkleppen.',b(40,'§5.7 Spiraalduik · liftverdeling en remkleppen'),study(2,'§5.6 Overtrek en Vrille / spiraalduik')),
        t('Herstel in de juiste volgorde','De herstelvolgorde in dit dictaat blijft: stuurknuppel iets naar voren om g te verminderen, horizontaal rollen en vervolgens de snelheid voorzichtig uit de duik halen.',b(40,'§5.7 Herstel spiraalduik')),
        q('Wat is volgens het dictaat de logische volgorde bij herstel uit een spiraalduik?',['Eerst g verminderen, dan horizontaal rollen en daarna beheerst uit de duik optrekken','Eerst maximaal trekken, daarna pas uitrollen','Eerst de remkleppen openen en daarna sneller gaan vliegen','Alle roeren volledig uitslaan en vasthouden'],0,'De bron geeft expliciet deze volgorde: iets voorwaarts om g te verminderen, horizontaal rollen en daarna voorzichtig uittrekken.',b(40,'§5.7 Herstel spiraalduik'),study(2,'§5.6 Overtrek en Vrille / spiraalduik')),
        t('Oefenen is herkennen','Het hoofdstuk sluit af met de boodschap dat regelmatig oefenen van overtrek, tolvlucht en spiraalduik helpt om de eerste symptomen vroeg te herkennen en het juiste herstel vrijwel instinctief uit te voeren.',b(40,'§5.7 Spiraalduik · oefendoel')),
        q('Wat is volgens de slottekst het belangrijkste leerdoel van regelmatig oefenen van deze ongewone vliegstanden?',['De eerste symptomen vroeg herkennen en het juiste herstel automatiseren','Zo lang mogelijk in de ongewone vliegstand blijven','Altijd hogere g-krachten leren verdragen','De maximumsnelheid zo vaak mogelijk benaderen'],0,'De bron legt de nadruk op vroege herkenning en een vrijwel instinctieve juiste herstelreactie.',b(40,'§5.7 Spiraalduik · oefendoel'),study(2,'§5.6 Overtrek en Vrille / spiraalduik')),
      ],
    },
  },
]
