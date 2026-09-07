import type { KnowledgeCheckStep, Lesson, Progress, ReviewItem, SourceReference, Subject } from '../domain/types'
import { getCourseDefinition } from '../data/courseDefinitions'

export type QuestionBankItem = {
  questionId: string
  lessonId: string
  chapterId?: string
  step: KnowledgeCheckStep
}

const DAY=24*60*60*1000
export const REVIEW_INTERVAL_DAYS=[1,3,7,14,30] as const

function shuffled<T>(items:T[]){
  const copy=[...items]
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1))
    ;[copy[i],copy[j]]=[copy[j],copy[i]]
  }
  return copy
}

const b=(page:number,section:string,pageEnd?:number):SourceReference=>({
  file:'5-Beginselen.pdf',page,...(pageEnd?{pageEnd}:{}),section,
})

// Extra actieve vraagvormen voor de referentiecursus. Ze gebruiken dezelfde
// generieke KnowledgeCheckStep-typen die de volgende vakken ook kunnen gebruiken.
const principlesChallengeItems:QuestionBankItem[]=[
  {
    questionId:'challenge-lift-speed-factor',lessonId:'principles-5-1-lift-formula',chapterId:'5.1',
    step:{type:'numeric',id:'challenge-lift-speed-factor',originLessonId:'principles-5-1-lift-formula',originChapterId:'5.1',question:'De luchtsnelheid verdubbelt terwijl de andere factoren in de liftformule gelijk blijven. Met welke factor verandert de draagkracht?',correctAnswer:4,unit:'×',explanation:'In de liftformule staat V². Twee keer de snelheid geeft daarom vier keer de draagkracht, zolang de andere factoren gelijk blijven.',source:b(14,'§5.1.2 De liftformule')},
  },
  {
    questionId:'challenge-glide-ratio-150',lessonId:'principles-5-2-polar',chapterId:'5.2',
    step:{type:'numeric',id:'challenge-glide-ratio-150',originLessonId:'principles-5-2-polar',originChapterId:'5.2',question:'Een zweefvliegtuig vliegt 150 km/h en daalt 5 km/h. Wat is het glijgetal?',correctAnswer:30,explanation:'Glijgetal = vliegsnelheid / daalsnelheid wanneer beide in dezelfde eenheid staan: 150 / 5 = 30.',source:b(25,'§5.2.2 Glijgetal')},
  },
  {
    questionId:'challenge-polar-tangent',lessonId:'principles-5-2-polar',chapterId:'5.2',
    step:{type:'question',id:'challenge-polar-tangent',originLessonId:'principles-5-2-polar',originChapterId:'5.2',question:'Bekijk de snelheidspolaire. Wat geeft in rustige lucht het raakpunt van de lijn vanuit de oorsprong met de polaire aan?',answers:['De snelheid voor het beste glijgetal','De maximum toegestane snelheid Vne','De snelheid voor de grootste daalsnelheid','De grondsnelheid bij nul wind'],correctIndex:0,explanation:'In rustige lucht vind je de snelheid voor het beste glijgetal door vanuit de oorsprong een raaklijn aan de polaire te trekken.',source:b(23,'§5.2.2 Snelheid voor beste glijgetal'),illustrationKey:'speed-polar'},
  },
  {
    questionId:'challenge-controls-match',lessonId:'principles-5-4-controls',chapterId:'5.4',
    step:{type:'match',id:'challenge-controls-match',originLessonId:'principles-5-4-controls',originChapterId:'5.4',question:'Koppel iedere beweging aan het juiste stuurorgaan en de juiste as.',pairs:[{left:'Stampen',right:'Hoogteroer · dwarsas'},{left:'Rollen',right:'Rolroeren · langsas'},{left:'Gieren',right:'Richtingsroer · topas'}],explanation:'Stampen gebeurt om de dwarsas met het hoogteroer, rollen om de langsas met de rolroeren en gieren om de topas met het richtingsroer.',source:b(31,'§5.4.1–5.4.3 Besturing om drie assen')},
  },
  {
    questionId:'challenge-vn-axes',lessonId:'principles-5-5-vn-diagram',chapterId:'5.5',
    step:{type:'question',id:'challenge-vn-axes',originLessonId:'principles-5-5-vn-diagram',originChapterId:'5.5',question:'Bekijk het schema. Welke grootheden staan op de assen van een V-n-diagram?',answers:['Vliegsnelheid V horizontaal en belastingfactor n verticaal','Belastingfactor n horizontaal en vlieghoogte verticaal','Daalsnelheid horizontaal en luchtdichtheid verticaal','Vliegsnelheid horizontaal en glijgetal verticaal'],correctIndex:0,explanation:'Het belastingsdiagram zet de vliegsnelheid V uit tegen de belastingfactor n.',source:b(34,'§5.5.5 Belastingdiagram',35),illustrationKey:'vn-diagram'},
  },
  {
    questionId:'challenge-bank-60g',lessonId:'principles-5-5-turn-load',chapterId:'5.5',
    step:{type:'numeric',id:'challenge-bank-60g',originLessonId:'principles-5-5-turn-load',originChapterId:'5.5',question:'Welke belastingfactor noemt het dictaat ongeveer voor een gecoördineerde bocht met 60° dwarshelling?',correctAnswer:2,unit:'g',explanation:'Bij 60° dwarshelling is ongeveer tweemaal zoveel lift nodig: circa 2g.',source:b(33,'§5.5.1 Bochten en g-krachten')},
  },
  {
    questionId:'challenge-stall-turn-scenario',lessonId:'principles-5-6-turn-stall',chapterId:'5.6',
    step:{type:'question',id:'challenge-stall-turn-scenario',originLessonId:'principles-5-6-turn-stall',originChapterId:'5.6',question:'Scenario: in een langzame bocht begint de binnenvleugel weg te zakken en de roeren voelen slap. Wat is volgens het dictaat de juiste eerste reactie?',answers:['Stuurknuppel vieren en eerst snelheid opnemen','Vol rolroer tegen geven om de vleugel op te tillen','Nog verder trekken om hoogte vast te houden','De remkleppen volledig openen'],correctIndex:0,explanation:'Bij een dreigende overtrek moet eerst de invalshoek worden verkleind en snelheid worden opgenomen; de wegzakkende vleugel niet met rolroer tegen proberen op te tillen.',source:b(38,'§5.6.1 Herstel dreigende overtrek in een bocht')},
  },
  {
    questionId:'challenge-spiral-recovery-order',lessonId:'principles-5-7-spiral-dive',chapterId:'5.7',
    step:{type:'order',id:'challenge-spiral-recovery-order',originLessonId:'principles-5-7-spiral-dive',originChapterId:'5.7',question:'Zet de herstelhandelingen uit §5.7 in de juiste volgorde.',items:['Stuurknuppel iets naar voren om de g-krachten te verminderen','Horizontaal rollen','De snelheid er voorzichtig uittrekken'],correctOrder:['Stuurknuppel iets naar voren om de g-krachten te verminderen','Horizontaal rollen','De snelheid er voorzichtig uittrekken'],explanation:'Het dictaat begint met g verminderen, daarna horizontaal rollen en vervolgens voorzichtig uit de duikvlucht trekken.',source:b(40,'§5.7 Herstel spiraalduik')},
  },
]

export function collectQuestionBank(subject:Subject):QuestionBankItem[]{
  const items:QuestionBankItem[]=[]
  const course=getCourseDefinition(subject.id)
  for(const unit of subject.units){
    if(!unit.lesson) continue
    const chapterId=course?.chapterIdForUnit(unit)
    unit.lesson.steps.forEach((step,index)=>{
      if(step.type==='theory') return
      const questionId=step.id ?? `${unit.lesson!.id}::${index}`
      items.push({
        questionId,
        lessonId:step.originLessonId ?? unit.lesson!.id,
        chapterId:step.originChapterId ?? chapterId,
        step:{...step,id:questionId,originLessonId:step.originLessonId ?? unit.lesson!.id,originChapterId:step.originChapterId ?? chapterId},
      })
    })
  }
  if(subject.id==='principles') items.push(...principlesChallengeItems)
  return items
}

function sample(items:QuestionBankItem[],count:number){
  return shuffled(items).slice(0,Math.min(count,items.length))
}

function balancedSample(items:QuestionBankItem[],count:number){
  const byLesson=new Map<string,QuestionBankItem[]>()
  for(const item of shuffled(items)){
    const list=byLesson.get(item.lessonId) ?? []
    list.push(item);byLesson.set(item.lessonId,list)
  }
  const picked:QuestionBankItem[]=[]
  for(const list of shuffled([...byLesson.values()])){
    const first=list.shift()
    if(first) picked.push(first)
    if(picked.length>=count) return picked
  }
  const used=new Set(picked.map(item=>item.questionId))
  picked.push(...sample(items.filter(item=>!used.has(item.questionId)),count-picked.length))
  return picked.slice(0,count)
}

function quizLesson(id:string,title:string,description:string,items:QuestionBankItem[],minScore:number):Lesson{
  return {
    id,title,description,minScore,
    steps:items.map(item=>({...item.step,id:item.questionId,originLessonId:item.lessonId,originChapterId:item.chapterId})),
  }
}

export function buildChapterCheckpoint(subject:Subject,chapterId:string){
  const course=getCourseDefinition(subject.id)
  const bank=collectQuestionBank(subject).filter(item=>item.chapterId===chapterId)
  const chapter=course?.chapters.find(item=>item.id===chapterId)
  const count=Math.min(12,Math.max(6,bank.length))
  return quizLesson(`checkpoint-${subject.id}-${chapterId}-${Date.now()}`,`${chapter?.shortTitle ?? chapterId} · hoofdstuktoets`,`Willekeurige kennischecks uit het hele hoofdstuk. Bij iedere nieuwe poging wordt opnieuw uit de brongebonden vraagbank gekozen.`,balancedSample(bank,count),course?.checkpointMinScore ?? 80)
}

export function buildSubjectExam(subject:Subject){
  const course=getCourseDefinition(subject.id)
  const bank=collectQuestionBank(subject)
  const picked:QuestionBankItem[]=[]
  const used=new Set<string>()
  const target=course?.examQuestionCount ?? 30
  if(course?.chapters.length){
    const minimumPerChapter=Math.max(1,Math.min(3,Math.floor(target/course.chapters.length)))
    for(const chapter of course.chapters){
      const chapterItems=bank.filter(item=>item.chapterId===chapter.id)
      for(const item of balancedSample(chapterItems,minimumPerChapter)){
        if(!used.has(item.questionId)){picked.push(item);used.add(item.questionId)}
      }
    }
  }
  const remaining=bank.filter(item=>!used.has(item.questionId))
  picked.push(...balancedSample(remaining,target-picked.length))
  return quizLesson(`exam-${subject.id}-${Date.now()}`,`${subject.title} · vakexamen`,`${target} willekeurige vragen uit het hele vak. Geen theoriekaarten tussendoor; iedere poging krijgt opnieuw een mix.`,shuffled(picked).slice(0,target),course?.examMinScore ?? 75)
}

export function dueReviewItems(progress:Progress,now=new Date()){
  const timestamp=now.getTime()
  return Object.values(progress.questionReviews).filter(item=>new Date(item.dueAt).getTime()<=timestamp)
}

export function buildReviewLesson(subject:Subject,progress:Progress){
  const bank=collectQuestionBank(subject)
  const byId=new Map(bank.map(item=>[item.questionId,item] as const))
  const due=dueReviewItems(progress)
    .sort((a,b)=>new Date(a.dueAt).getTime()-new Date(b.dueAt).getTime())
    .map(item=>byId.get(item.questionId))
    .filter((item):item is QuestionBankItem=>Boolean(item))
  return quizLesson(`review-${subject.id}-${Date.now()}`,'Herhalen','Vragen die fout gingen of volgens het 1/3/7/14/30-dagenritme weer aan de beurt zijn.',due.slice(0,20),courseReviewMinScore(subject))
}

function courseReviewMinScore(subject:Subject){
  return getCourseDefinition(subject.id)?.checkpointMinScore ?? 80
}

export function updateReviewItem(existing:ReviewItem|undefined,item:{questionId:string,lessonId:string,chapterId?:string},isCorrect:boolean,now=new Date()):ReviewItem{
  const attempts=(existing?.attempts ?? 0)+1
  const correct=(existing?.correct ?? 0)+(isCorrect?1:0)
  if(!isCorrect){
    return {questionId:item.questionId,lessonId:item.lessonId,chapterId:item.chapterId,stage:-1,dueAt:now.toISOString(),attempts,correct,lastAnsweredAt:now.toISOString()}
  }
  const stage=Math.min(existing ? existing.stage+1 : 0,REVIEW_INTERVAL_DAYS.length-1)
  const dueAt=new Date(now.getTime()+REVIEW_INTERVAL_DAYS[stage]*DAY).toISOString()
  return {questionId:item.questionId,lessonId:item.lessonId,chapterId:item.chapterId,stage,dueAt,attempts,correct,lastAnsweredAt:now.toISOString()}
}

export function reviewStageLabel(stage:number){
  if(stage>=4) return 'beheerst'
  if(stage>=1) return 'geoefend'
  if(stage>=0) return 'gezien'
  return 'direct herhalen'
}
