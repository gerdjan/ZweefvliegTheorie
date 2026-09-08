import type { SourcedUnit } from '../../domain/types'
import { cov, h, match, o, q, t } from '../humanFactory'

export const human224Units:SourcedUnit[]=[
  {
    id:"human-orientation-systems",title:"2.2 · Drie systemen voor oriëntatie",
    lesson:{
      id:"human-orientation-systems",title:"Drie systemen voor oriëntatie",description:"Brongebonden leerlevel uit §2.2.4.",minScore:80,
      steps:[
        t("Visueel, vestibulair, somatosensorisch","Ruimtelijke oriëntatie berust op informatie uit het visuele systeem, het vestibulaire systeem in het binnenoor en het somatosensorische systeem uit huid, spieren en gewrichten. Bij goed zicht en een duidelijke horizon is visuele informatie voor een vlieger doorgaans de meest betrouwbare oriëntatiebron. Wanneer visuele referenties ontbreken kunnen vestibulaire en lichamelijke signalen misleidend zijn.",h(23,"§2.2.4"),cov("human-d099","human-d100","human-d101")),
        t("Luchtziekte als conflict","Luchtziekte kan ontstaan wanneer de hersenen tegenstrijdige informatie ontvangen van ogen, evenwichtsorgaan en lichaamsgevoel. Symptomen kunnen misselijkheid, bleekheid, zweten en uiteindelijk braken omvatten.",h(23,"§2.2.4"),cov("human-d102","human-d103")),
        match("Koppel oriëntatiesysteem aan bron van informatie.",[{left:"Visueel",right:"ogen en horizon"},{left:"Vestibulair",right:"binnenoor"},{left:"Somatosensorisch",right:"huid, spieren en gewrichten"}],"Ruimtelijke oriëntatie is een combinatie van deze drie systemen.",h(23,"§2.2.4")),
        q("Waarom kan luchtziekte ontstaan?",["Door conflicterende zintuiglijke informatie over beweging en houding","Omdat de luchtdruk altijd te hoog is","Alleen door lawaai","Omdat de pupil niet meer reageert"],0,"Een mismatch tussen visuele, vestibulaire en lichamelijke signalen is de kern.",h(23,"§2.2.4")),
      ],
    },
  },
  {
    id:"human-vestibular-illusions",title:"2.2 · Vestibulaire illusies",
    lesson:{
      id:"human-vestibular-illusions",title:"Vestibulaire illusies",description:"Brongebonden leerlevel uit §2.2.4.",minScore:80,
      steps:[
        t("Coriolis-illusie","Na een langere constante bocht kan de vloeistof in de halfcirkelvormige kanalen tot rust komen en voelt de rotatie minder sterk. Een plotselinge hoofdbeweging tijdens zo’n bocht kan de kanalen opnieuw prikkelen en een sterke, verkeerde draai-indruk veroorzaken: de Coriolis-illusie.",h(24,"§2.2.4"),cov("human-d104","human-d105")),
        t("Somatogravische illusie","Lineaire versnelling kan via de otolieten als een verandering van stand ten opzichte van de zwaartekracht worden geïnterpreteerd. Daardoor kan versnellen een schijnbare neus-omhoog-indruk en vertragen een schijnbare neus-omlaag-indruk geven.",h(24,"§2.2.4"),cov("human-d106","human-d107")),
        q("Wanneer kan een Coriolis-illusie optreden?",["Bij een plotselinge hoofdbeweging tijdens of na een langere bocht","Alleen bij rechtuit vliegen zonder versnelling","Alleen door fel licht","Alleen door lage luchtdruk"],0,"De hoofdbeweging activeert andere halfcirkelvormige kanalen terwijl het brein al aan de bocht gewend was.",h(24,"§2.2.4")),
        q("Welk orgaan speelt een hoofdrol bij somatogravische illusies door lineaire versnelling?",["De otolieten","Het netvlies","De buis van Eustachius","De oogzenuw"],0,"Otolieten reageren op lineaire versnelling én zwaartekracht.",h(24,"§2.2.4")),
      ],
    },
  },
  {
    id:"human-disorientation-recovery",title:"2.2 · Omgaan met desoriëntatie",
    lesson:{
      id:"human-disorientation-recovery",title:"Omgaan met desoriëntatie",description:"Brongebonden leerlevel uit §2.2.4.",minScore:80,
      steps:[
        t("Zintuigen kunnen liegen","Het gevoel van de vlieger is niet altijd een betrouwbare indicatie van de werkelijke stand of beweging van het vliegtuig. Bij twijfel moet de vlieger betrouwbare externe visuele referenties en, waar toepasselijk, instrumentinformatie gebruiken in plaats van een misleidend lichaamsgevoel.",h(25,"§2.2.4"),cov("human-d108","human-d109")),
        t("Preventie","Vermoeidheid, stress, ziekte en abrupte hoofdbewegingen kunnen de gevoeligheid voor desoriëntatie vergroten. Een rustige scan, goed zicht, duidelijke horizon en het voorkomen van onnodige hoofdbewegingen tijdens bochten verminderen het risico.",h(25,"§2.2.4"),cov("human-d110","human-d111")),
        q("Wat is de kernregel bij ruimtelijke desoriëntatie?",["Vertrouw niet blind op lichaamsgevoel als dat strijdig is met betrouwbare visuele/instrumentreferenties","Volg altijd het sterkste gevoel van draaien","Sluit de ogen om te voelen wat het vliegtuig doet","Maak direct een steilere bocht"],0,"De bron benadrukt dat het evenwichtsorgaan en lichaamsgevoel verkeerde signalen kunnen geven.",h(25,"§2.2.4")),
      ],
    },
  }
]
