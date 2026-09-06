import type { SourcedUnit } from '../../domain/types'
import { b, q, study, t } from './helpers'

export const units:SourcedUnit[] = [
    {
      id:'principles-5-5-turn-load',
      title:'5.5 · Bochten, zuiverheid en belastingfactor',
      lesson:{
        id:'principles-5-5-turn-load',
        title:'Bochten en belastingfactor',
        description:'Meer lift, meer g, hogere overtreksnelheid en het gevaar van een schuivende bocht.',
        minScore:80,
        steps:[
          t('Meer helling, meer lift','In een steile bocht moet de totale lift groter zijn zodat de verticale liftcomponent het gewicht blijft dragen. Bij 60° noemt het dictaat ongeveer 2g.',b(33,'§5.5.1 Bochten en g-krachten')),
          q('Welke belastingfactor hoort volgens het dictaat bij een gecoördineerde bocht van 60°?',['Ongeveer 1g','Ongeveer 1,15g','Ongeveer 2g','Ongeveer 5g'],2,'Bij 60° dwarshelling is de benodigde lift ongeveer tweemaal het gewicht: circa 2g.',b(33,'§5.5.1 Bochten en g-krachten'),study(2,'§5.5 Beperkingen')),
          t('Zuiver en onzuiver','In een zuivere bocht past de hoeveelheid voetenstuur bij de gekozen dwarshelling en staat het piefje in het midden. Te veel voeten geeft een schuivende bocht; te weinig voeten een slippende bocht.',b(33,'§5.5.2 Zuivere en onzuivere bochten',34)),
          t('Schuivende bocht','Bij een schuivende bocht wijst de neus te veel naar binnen. De binnenvleugel is langzamer en kan bij lage snelheid ongunstig worden aangestroomd; het dictaat waarschuwt voor het risico op een tolvlucht.',b(33,'§5.5.2 Schuivende bocht')),
          q('Welke onzuivere bocht noemt het dictaat als bijzonder riskant bij lage snelheid vanwege een mogelijke tolvlucht?',['Een schuivende bocht','Een zuivere bocht','Een horizontale vlucht','Een slippende bocht is per definitie een tolvlucht'],0,'Bij te veel voeten in een schuivende bocht kan de langzamere binnenvleugel overtrekken en een tolvlucht inzetten.',b(33,'§5.5.2 Schuivende bocht'),study(2,'§5.5 Beperkingen')),
          t('Belastingfactor n','De belastingfactor n drukt de belasting in g uit. Bij 1g is de lift ongeveer gelijk aan het gewicht; bij 2g is tweemaal zoveel lift nodig.',b(34,'§5.5.3 Belastingsfactor')),
        ],
      },
    },
    {
      id:'principles-5-5-vn-diagram',
      title:'5.5 · Manoeuvreerdiagram en snelheidslimieten',
      lesson:{
        id:'principles-5-5-vn-diagram',
        title:'Manoeuvreerdiagram en snelheidslimieten',
        description:'Manoeuvreerbelasting, remousbelasting, VA, VRA, Vne en de grenzen van het V-n-diagram.',
        minScore:80,
        steps:[
          t('Manoeuvreer- en remousbelasting','Belasting door stuurbewegingen heet manoeuvreerbelasting. Belasting door plotselinge invalshoekveranderingen in onrustige lucht heet remousbelasting.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting')),
          q('Wat is remousbelasting?',['Extra belasting door onrustige lucht die de invalshoek plotseling verandert','Belasting door het gewicht van bagage alleen','Alleen belasting door remkleppen op de grond','De normale 1g-belasting in rechte vlucht'],0,'Het dictaat koppelt remousbelasting aan plotselinge liftveranderingen door turbulentie/remous.',b(34,'§5.5.4 Manoeuvreerbelasting en remousbelasting'),study(2,'§5.5 Beperkingen')),
          t('V-n-diagram','In het belastingsdiagram staat vliegsnelheid V horizontaal en belastingfactor n verticaal. Het diagram begrenst veilige combinaties van snelheid en g-belasting.',b(34,'§5.5.5 Belastingdiagram',35)),
          t('VA','VA is de manoeuvreersnelheid. Boven VA mogen volgens het dictaat geen plotselinge volledige roeruitslagen worden gegeven omdat de belasting te hoog kan worden.',b(34,'§5.5.4 VA',35)),
          t('Vne en VRA','Vne is de maximum toegestane snelheid. In onrustige lucht kan een lagere grens gelden; het dictaat bespreekt VRA als maximumsnelheid in rough air.',b(35,'§5.5.5 Vne',36)),
          q('Wat mag je boven VA niet doen?',['Plotseling een volledige roeruitslag geven','De cockpit ventileren','De radio gebruiken','Een kaart lezen'],0,'Boven VA kan een plotselinge volledige roeruitslag het vliegtuig overbelasten.',b(34,'§5.5.4 VA',35),study(2,'§5.5 Beperkingen')),
          t('Onder VA en overtrekgrens','In het voorbeeld van het V-n-diagram kan het vliegtuig tot VA bij een abrupte positieve uitslag eerder overtrekken dan de structurele limiet overschrijden. Dit geldt alleen binnen de voorwaarden en limieten uit het handboek.',b(35,'§5.5.5 Belastingdiagram')),
        ],
      },
    },
    {
      id:'principles-5-5-flutter',
      title:'5.5 · Flutter',
      lesson:{
        id:'principles-5-5-flutter',
        title:'Flutter',
        description:'Een onstabiele trilling die buiten de toegestane grenzen snel destructief kan worden.',
        minScore:80,
        steps:[
          t('Wat is flutter?','Flutter is volgens het dictaat een onstabiele trilling die in korte tijd tot breuk kan leiden.',b(36,'§5.5.6 Flutter')),
          t('Demping en kritische snelheid','Binnen het toegestane snelheidsgebied dempt de constructie trillingen uit. Bij de kritische fluttersnelheid is de demping nul; daarboven kan een kleine verstoring een steeds grotere trilling veroorzaken.',b(36,'§5.5.6 Flutter')),
          q('Wat moet je volgens het dictaat doen als je bij hoge snelheid trillingen in de stuurvlakken voelt?',['Snelheid verminderen','Volledig aan de knuppel trekken','Sneller vliegen om erdoorheen te gaan','Remkleppen volledig openen en versnellen'],0,'Het dictaat zegt: verminder de snelheid.',b(36,'§5.5.6 Flutter'),study(2,'§5.5 Beperkingen')),
          t('Speling kan flutter versterken','Te veel speling in een rolroer kan de vleugel tijdens een trilling telkens extra aanstoten en de trilling versterken.',b(36,'§5.5.6 Flutter')),
          q('Waarom zijn onderhoud en het respecteren van snelheidsgrenzen belangrijk voor flutter?',['Omdat stijfheid, demping en roerspeling bepalen of trillingen uitdoven of kunnen aangroeien','Omdat flutter alleen door luchtdruk op de grond ontstaat','Omdat Vne een minimumsnelheid is','Omdat flutter geen structureel risico vormt'],0,'Het dictaat koppelt flutter aan constructiestijfheid/demping, roerspeling en vliegen buiten de toegestane snelheidsgrenzen.',b(36,'§5.5.6 Flutter'),study(2,'§5.5 Beperkingen')),
        ],
      },
    },
]
