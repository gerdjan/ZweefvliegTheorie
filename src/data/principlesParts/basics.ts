import type { SourcedUnit } from '../../domain/types'
import { b, q, study, t } from './helpers'

export const units:SourcedUnit[] = [
    {
      id:'principles-5-0-basics',
      title:'5.0 · Krachten, assen en geometrie',
      lesson:{
        id:'principles-5-0-basics',
        title:'Krachten, assen en geometrie',
        description:'De taal van de aerodynamica: krachten, momenten, assen en vleugelbegrippen.',
        minScore:80,
        steps:[
          t('Aerodynamica en vliegmechanica','Aerodynamica beschrijft de krachten en momenten door de omstromende lucht. Vliegmechanica beschrijft hoe het zweefvliegtuig onder invloed van die krachten beweegt.',b(3,'§5.0.1 Inleiding')),
          t('Vier krachten','Bij horizontale vlucht met constante snelheid onderscheidt het dictaat draagkracht (lift), zwaartekracht, voortstuwingskracht en weerstand (drag).',b(3,'§5.0.2 Begrippen en definities')),
          q('Welke vier krachten noemt het dictaat bij horizontale vlucht met constante snelheid?',['Lift, zwaartekracht, voortstuwingskracht en weerstand','Lift, middelpuntvliedende kracht, traagheid en druk','Gewicht, rolmoment, giermoment en stampmoment','Weerstand, thermiek, zwaartekracht en luchtdruk'],0,'Het dictaat noemt draagkracht, zwaartekracht, voortstuwingskracht en weerstand.',b(3,'§5.0.2 Krachten'),study(1,'§5.1 Aerodynamica')),
          t('Drie assen','Het zwaartepunt wordt als oorsprong gebruikt voor drie loodrechte assen: langsas, dwarsas en topas.',b(3,'§5.0.2 Zwaartepunt en assen')),
          t('Koorde, slankheid en vleugelvorm','De koorde is de breedte van de vleugel. De slankheid is spanwijdte gedeeld door gemiddelde koorde. Het dictaat onderscheidt ook symmetrische/asymmetrische profielen, pijlstelling en V-stelling.',b(4,'§5.0.2 Spanwijdte, koorde, profielen, pijlvorm en V-stelling')),
          q('Wat is volgens het dictaat de slankheid van een vleugel?',['Spanwijdte gedeeld door gemiddelde koorde','Gemiddelde koorde gedeeld door spanwijdte','Vleugeloppervlak gedeeld door gewicht','Gewicht gedeeld door vleugeloppervlak'],0,'Slankheid = spanwijdte / gemiddelde koorde.',b(4,'§5.0.2 Koorde en slankheid'),study(1,'§5.1 Aerodynamica')),
          t('Instelhoek en invalshoek','De instelhoek is de hoek tussen vleugelkoorde en langsas en is door de fabrikant ingesteld. De invalshoek is de hoek tussen vleugelkoorde en luchtstroom en verandert tijdens de vlucht met de stand van het vliegtuig.',b(5,'§5.0.2 Instelhoek en invalshoek')),
          q('Welke hoek verandert tijdens de vlucht wanneer je de stuurknuppel naar voren of achteren beweegt?',['De instelhoek','De invalshoek','De V-stelling','De pijlstelling'],1,'De invalshoek is de hoek van de vleugelkoorde met de luchtstroom; die verandert tijdens de vlucht.',b(5,'§5.0.2 De invalshoek'),study(1,'§5.1 Aerodynamica')),
        ],
      },
    },
]
