const SOURCE_URLS = {
  sleepMap: null,
  outputs: null,
  aiWellness: null,
  mechanismLayering: null,
  closedLoop: null,
  labVsHome: null,
  hardware: null,
  hardwareDistilled: null,
  breath: null,
  yoga: null,
  mindBodyMap: null,
  meditationStory: null,
  outlive: null,
  formFactor: null,
  breathingPrinciple: null
};

const domains = [
  {
    id: "mechanism",
    index: "01",
    name: "睡眠机制",
    icon: "◔",
    description: "睡眠如何发生，哪些系统共同塑造一夜睡眠？"
  },
  {
    id: "classification",
    index: "02",
    name: "问题分型",
    icon: "⑂",
    description: "人为什么睡不好，不同问题是否需要不同干预？"
  },
  {
    id: "measurement",
    index: "03",
    name: "测量与指标",
    icon: "⌁",
    description: "我们如何知道睡得好不好，又能相信到什么程度？"
  },
  {
    id: "intervention",
    index: "04",
    name: "干预与证据",
    icon: "✦",
    description: "什么方法对什么人有效，证据究竟有多强？"
  },
  {
    id: "product",
    index: "05",
    name: "产品与技术",
    icon: "◫",
    description: "如何把睡眠科学转化为可靠、可持续使用的产品？"
  },
  {
    id: "longterm",
    index: "06",
    name: "长期影响",
    icon: "♡",
    description: "睡眠如何影响认知、情绪、代谢与健康寿命？"
  }
];

const books = [
  {
    id: "why-we-sleep",
    title: "Why We Sleep",
    chineseTitle: "《我们为什么要睡觉》",
    author: "Matthew Walker",
    framing: "从神经科学与生理机制出发，解释睡眠结构、缺觉后果，以及为什么睡眠应被视为健康基础设施。",
    lens: "机制与长期影响",
    domains: ["睡眠机制", "测量与指标", "长期影响"],
    points: [
      "睡眠倾向可由昼夜节律与稳态睡眠压力共同理解；只看“困不困”不足以解释入睡。",
      "NREM 与 REM 在一夜中循环出现，前后半夜的结构不同，不能只追求某一个阶段越多越好。",
      "睡眠与学习记忆、情绪调节和免疫代谢等系统相关，但不同结论的证据强度并不相同。",
      "咖啡因会影响腺苷相关的睡眠压力体验；个体代谢差异使统一的停用时间并不精确。",
      "酒精的镇静感不等于自然睡眠，可能带来睡眠碎片化和结构改变。"
    ],
    questions: [
      "如何把昼夜节律与睡眠压力转化为家庭可测的个体模型？",
      "消费级设备估算的睡眠阶段，是否足以支持个体干预？",
      "如何沟通睡眠风险，又不诱发过度监测与睡眠焦虑？"
    ],
    caveat: "适合作为科学框架入口；涉及疾病风险、精确效应量和单一睡眠阶段功能的表述，仍需回到原始研究核验。",
    source: "https://www.simonandschuster.com/books/Why-We-Sleep/Matthew-Walker/9781501144325"
  },
  {
    id: "sleep-revolution",
    title: "The Sleep Revolution",
    chineseTitle: "《睡眠革命》",
    author: "Arianna Huffington",
    framing: "从文化、工作方式与日常行为出发，把睡眠不足看成个人习惯与组织环境共同造成的系统问题。",
    lens: "行为与组织改变",
    domains: ["问题分型", "干预与证据", "产品与技术"],
    points: [
      "把少睡等同于勤奋，会系统性低估判断力、健康与关系质量的损失。",
      "改善睡眠不仅是个人意志问题，也与工作制度、技术使用和社会规范有关。",
      "稳定的睡前过渡仪式可以帮助大脑从工作与信息刺激切换到休息状态。",
      "卧室中的光线、温度、噪声和手机可及性共同构成行为环境。",
      "数字工具应该降低睡前摩擦与焦虑，而不是让用户对分数产生新的依赖。"
    ],
    questions: [
      "睡前仪式中，真正产生独立效果的是哪些组成部分？",
      "组织层面的睡眠政策，能否比个人提醒带来更持久的行为改变？",
      "怎样设计低摩擦的数字边界，同时保持真实世界依从性？"
    ],
    caveat: "适合补充行为、文化与组织视角；实践建议应按人群、问题类型和干预证据分别评估。",
    source: "https://www.penguinrandomhouse.com/books/253098/the-sleep-revolution-by-arianna-huffington/"
  }
];

const questions = [
  {
    id: "M-01", domain: "mechanism", status: "published", evidence: "B", updated: "2026-08-31",
    title: "昼夜节律、睡眠压力与唤醒系统如何共同决定入睡？",
    answer: "当前更合理的解释不是寻找单一原因，而是把睡眠看成昼夜节律、稳态睡眠压力与认知/生理唤醒之间的动态平衡。不同人睡不好的主导机制可能完全不同。",
    why: "它决定研究和产品是否应该按机制识别用户，而不是只解释一个总分。",
    knowledge: ["昼夜节律决定身体在什么时间更容易睡。", "清醒时间积累稳态睡眠压力。", "压力、情绪和睡眠努力可能让唤醒系统抵消睡意。"],
    open: ["如何用家庭可获得的数据识别主导机制？", "主导机制是否会在同一个人身上随时间切换？"],
    sources: [["睡眠知识地图", SOURCE_URLS.sleepMap], ["睡眠问题应按机制分层", SOURCE_URLS.mechanismLayering]]
  },
  {
    id: "M-02", domain: "mechanism", status: "researching", evidence: "C", updated: "2026-08-31",
    title: "行为、环境、呼吸与神经活动如何与核心睡眠机制相互作用？",
    answer: "现有框架提示，这些因素通常不是彼此独立的原因，而是通过影响节律、睡眠压力、唤醒和生理稳定性改变睡眠结果。1.0 暂不把任何单一因素视为普遍解释。",
    why: "它能防止产品把相关性很弱的单个信号包装成睡眠原因。",
    knowledge: ["晚间光线可以移动或扰动节律。", "呼吸与自主神经状态可能影响唤醒水平。", "噪声与温度可能改变睡眠连续性。"],
    open: ["哪些因素具有稳定的个体内效应？", "如何区分共现因素与真正的因果因素？"],
    sources: [["睡眠知识地图", SOURCE_URLS.sleepMap], ["AI × Wellness 知识地图", SOURCE_URLS.aiWellness]]
  },
  {
    id: "M-03", domain: "mechanism", status: "backlog", evidence: "C", updated: "—",
    title: "“太努力想睡着”是否会反过来提高唤醒水平？",
    answer: "失眠体验与部分认知模型都提示，睡眠努力、结果焦虑和持续自我监控可能形成恶性循环。但心理体验与可测生理唤醒之间的对应关系仍需进一步研究。",
    why: "它会影响冥想、接纳练习和失眠产品的语言与交互设计。",
    knowledge: ["睡眠不是可以通过意志直接完成的任务。", "对入睡结果的持续监控可能增加焦虑。", "接纳与不执着可能改变人对失眠体验的反应。"],
    open: ["如何可靠测量睡眠努力？", "接纳训练与放松训练的作用路径是否不同？"],
    sources: [["内观十天改变睡眠", SOURCE_URLS.meditationStory], ["身心练习知识地图", SOURCE_URLS.mindBodyMap]]
  },
  {
    id: "M-04", domain: "mechanism", status: "backlog", evidence: "C", updated: "—",
    title: "呼吸对入睡的作用来自自主神经、机械变化还是注意力训练？",
    answer: "三种路径都存在理论与初步证据，但很难在现有练习中被完全分离。后续研究需要比较相同频率下的机械、注意力和预期效应。",
    why: "如果能找到主要作用路径，就能设计更短、更稳定且更个性化的呼吸干预。",
    knowledge: ["慢呼吸可能改变自主神经活动。", "横膈膜运动会带来机械和感受变化。", "数息本身也是注意力训练。"],
    open: ["哪条路径解释的效果最多？", "是否存在不同人群对应不同主要路径？"],
    sources: [["呼吸工作坊", SOURCE_URLS.breath], ["呼吸是低门槛调节入口", SOURCE_URLS.breathingPrinciple]]
  },
  {
    id: "M-05", domain: "mechanism", status: "backlog", evidence: "B", updated: "—",
    title: "REM 与深度非 REM 睡眠分别承担什么功能？",
    answer: "不同阶段可能以不同方式支持记忆、情绪处理与生理恢复，但把单个阶段理解成越多越好并不准确；完整睡眠结构与个体需求同样重要。",
    why: "它决定产品是否应该追求单一睡眠阶段优化。",
    knowledge: ["REM 与非 REM 睡眠存在不同脑活动特征。", "学习、记忆与情绪处理可能依赖多个阶段。", "消费设备对阶段的估算存在误差。"],
    open: ["阶段比例与次日功能的关系有多稳定？", "人为增加某一阶段是否一定带来真实收益？"],
    sources: [["《超越百岁》笔记", SOURCE_URLS.outlive], ["睡眠知识地图", SOURCE_URLS.sleepMap], ["Why We Sleep｜机制框架", books[0].source]]
  },
  {
    id: "T-01", domain: "classification", status: "published", evidence: "B", updated: "2026-08-31",
    title: "睡眠问题应该如何按机制分型，而不是依赖统一睡眠分数？",
    answer: "1.0 建议至少区分入睡困难、维持与碎片化、昼夜节律错位、呼吸与生理问题、认知情绪唤醒五类。产品应先判断问题类型，再匹配测量与干预。",
    why: "这是后续个性化、产品闭环和临床转介的共同基础。",
    knowledge: ["相似的低睡眠分数可能来自完全不同原因。", "不同问题需要不同传感信号。", "错误分型可能带来无效甚至不适合的建议。"],
    open: ["五类分型之间是否需要允许重叠？", "最少需要哪些数据完成初步分型？"],
    sources: [["睡眠问题应按机制分层", SOURCE_URLS.mechanismLayering], ["睡眠知识地图", SOURCE_URLS.sleepMap]]
  },
  {
    id: "T-02", domain: "classification", status: "researching", evidence: "C", updated: "2026-08-31",
    title: "哪一类睡眠问题最适合作为消费级主动干预的第一切口？",
    answer: "理想切口需要同时满足问题高频、状态可感知、干预风险低、效果能在短期内再次测量。目前入睡困难和压力相关唤醒最值得优先比较。",
    why: "直接影响 AI × Wellness 产品的首批用户、价值主张和产品形态。",
    knowledge: ["强痛点不一定等于容易干预。", "低风险、短反馈周期更适合消费产品。", "呼吸暂停等问题需要医疗路径而非通用建议。"],
    open: ["高频是否等于高付费意愿？", "入睡改善是否比深睡提升更容易被用户感知？"],
    sources: [["输出与项目", SOURCE_URLS.outputs], ["AI × Wellness 知识地图", SOURCE_URLS.aiWellness], ["The Sleep Revolution｜行为与文化视角", books[1].source]]
  },
  {
    id: "T-03", domain: "classification", status: "backlog", evidence: "B", updated: "—",
    title: "入睡困难与夜间维持困难应如何分别研究？",
    answer: "两者可能涉及不同的时间窗口、诱因和结果指标，不宜用相同问卷或干预简单合并。研究设计应分别观察入睡潜伏期、夜间觉醒和醒后再入睡。",
    why: "它决定同一产品是否需要两套完全不同的检测与干预逻辑。",
    knowledge: ["入睡困难发生在睡眠开始阶段。", "维持困难与碎片化发生在夜间。", "相同总睡眠时间可能隐藏不同体验。"],
    open: ["两类问题最常见的共病组合是什么？", "哪些消费级信号能稳定地区分它们？"],
    sources: [["睡眠知识地图", SOURCE_URLS.sleepMap]]
  },
  {
    id: "T-04", domain: "classification", status: "backlog", evidence: "B", updated: "—",
    title: "如何识别需要医疗转介的呼吸与生理睡眠问题？",
    answer: "消费产品可以识别风险信号，但不能把风险筛查等同于诊断。研究重点应是明确红旗信号、假阳性代价和转介路径。",
    why: "这是公开网站和消费睡眠产品必须明确的安全边界。",
    knowledge: ["睡眠呼吸暂停可能需要医学评估。", "消费级 PPG 与运动数据只能提供代理信号。", "漏检和误报都会带来实际风险。"],
    open: ["哪些组合信号足以触发转介？", "如何向用户解释不确定性而不制造恐慌？"],
    sources: [["睡眠知识地图", SOURCE_URLS.sleepMap], ["实验室有效性不等于家庭有效性", SOURCE_URLS.labVsHome]]
  },
  {
    id: "T-05", domain: "classification", status: "backlog", evidence: "C", updated: "—",
    title: "年龄、焦虑与慢性失眠会如何改变睡眠问题分型？",
    answer: "不同年龄和健康状态会改变睡眠结构、主观需求与干预风险，因此同一阈值不能直接应用于所有人群。1.0 将其作为分层变量，而不是独立结论。",
    why: "它影响研究样本、产品个性化与效果解释。",
    knowledge: ["老年人的睡眠结构与年轻人不同。", "焦虑可能提高认知和生理唤醒。", "慢性失眠与偶发睡不好不是同一问题。"],
    open: ["哪些分层变量最能预测干预反应？", "年龄效应与疾病效应如何分离？"],
    sources: [["闭环神经调节睡眠硬件", SOURCE_URLS.hardware]]
  },
  {
    id: "Q-01", domain: "measurement", status: "published", evidence: "B", updated: "2026-08-31",
    title: "PSG、EEG、PPG、HRV 与加速度计分别能可靠回答什么？",
    answer: "PSG 仍是临床参考，但不适合长期家庭使用；EEG 更接近脑状态，PPG、HRV 与运动数据则提供不同层级的代理信号。消费级设备更适合识别趋势，而不是独立诊断。",
    why: "它决定产品可以做什么声明，以及哪些用户问题根本无法仅凭现有数据回答。",
    knowledge: ["PSG 同时记录多类生理信号。", "PPG 与 HRV 并不直接测量睡眠阶段。", "加速度计容易把安静清醒误判为睡眠。"],
    open: ["不同设备对睡眠阶段的误差有多大？", "长期趋势能否弥补单夜精度不足？"],
    sources: [["睡眠知识地图", SOURCE_URLS.sleepMap], ["实验室有效性不等于家庭有效性", SOURCE_URLS.labVsHome]]
  },
  {
    id: "Q-02", domain: "measurement", status: "researching", evidence: "C", updated: "2026-08-31",
    title: "什么指标最能代表用户真正获得了睡眠改善？",
    answer: "入睡时间、夜间觉醒、慢波与总睡眠时间都只解释一部分结果。主观恢复感、次日精力与功能表现可能更接近用户价值，但标准化难度更高。",
    why: "它决定研究 endpoint 和产品北极星指标。",
    knowledge: ["客观指标与主观体验可能不一致。", "慢波增加不自动等于用户感觉更好。", "次日功能可能是更接近价值的结果指标。"],
    open: ["主观恢复感与客观数据不一致时，应相信哪个？", "次日功能如何低成本、低干扰地测量？"],
    sources: [["睡眠知识地图", SOURCE_URLS.sleepMap], ["闭环神经调节研究笔记", SOURCE_URLS.hardwareDistilled]]
  },
  {
    id: "Q-03", domain: "measurement", status: "backlog", evidence: "C", updated: "—",
    title: "消费级可穿戴设备能识别睡眠原因，还是只能描述结果？",
    answer: "多数设备更擅长描述与趋势识别。要推断原因，需要把传感数据与环境、行为、主观状态和长期基线结合，并明确推断的不确定性。",
    why: "它能避免把 dashboard 相关性错误包装成个体诊断。",
    knowledge: ["同一个信号变化可能对应多个原因。", "长期上下文比单夜数据更有解释力。", "因果推断需要额外设计。"],
    open: ["哪些上下文变量最值得采集？", "个体内实验能否帮助识别原因？"],
    sources: [["睡眠问题应按机制分层", SOURCE_URLS.mechanismLayering], ["AI × Wellness 知识地图", SOURCE_URLS.aiWellness]]
  },
  {
    id: "Q-04", domain: "measurement", status: "backlog", evidence: "C", updated: "—",
    title: "个人长期基线是否比人群统一阈值更有价值？",
    answer: "对于恢复、HRV 和行为变化，个人长期基线通常更适合发现偏离；但它不能替代明确的医学风险阈值。两者应服务不同目标。",
    why: "它影响算法如何给出个性化建议和风险提示。",
    knowledge: ["个体间差异可能大于短期变化。", "长期基线能帮助识别异常偏离。", "医学安全阈值仍需参考人群证据。"],
    open: ["建立可靠基线需要多少天？", "疾病或生活变化后何时应重置基线？"],
    sources: [["睡眠知识地图", SOURCE_URLS.sleepMap], ["AI × Wellness 知识地图", SOURCE_URLS.aiWellness]]
  },
  {
    id: "Q-05", domain: "measurement", status: "backlog", evidence: "C", updated: "—",
    title: "用户可感知结果与 wearable 可测结果应该如何映射？",
    answer: "两类结果不应互相取代。合理框架需要同时追踪用户感受、次日功能和可重复的生理信号，并观察它们是否在长期内一致变化。",
    why: "它决定产品是在优化分数，还是优化真实状态。",
    knowledge: ["可测不等于重要。", "重要不一定容易被传感器捕捉。", "结果映射需要个体和时间维度。"],
    open: ["哪些主观量表最适合频繁使用？", "如何减少自我报告负担和期待偏差？"],
    sources: [["AI × Wellness 知识地图", SOURCE_URLS.aiWellness], ["闭环神经调节研究笔记", SOURCE_URLS.hardwareDistilled]]
  },
  {
    id: "I-01", domain: "intervention", status: "researching", evidence: "B", updated: "2026-08-31",
    title: "呼吸训练对失眠的真实效果有多大？",
    answer: "慢呼吸可能通过自主神经、注意力与主观安全感降低唤醒，但不同呼吸方法、样本与结局指标差异很大，不能把“有生理作用”等同于“能治疗失眠”。",
    why: "呼吸具有低门槛、高可及性，是内容和软件干预的重要候选入口。",
    knowledge: ["呼吸可被主动调节且全天可用。", "慢呼吸可能影响 HRV 与主观唤醒。", "严重失眠仍需更完整的评估与治疗。"],
    open: ["哪些失眠亚型最可能受益？", "RCT 与 meta-analysis 中的平均效果量究竟多大？"],
    sources: [["呼吸工作坊", SOURCE_URLS.breath], ["呼吸是低门槛调节入口", SOURCE_URLS.breathingPrinciple]]
  },
  {
    id: "I-02", domain: "intervention", status: "backlog", evidence: "C", updated: "—",
    title: "延长呼气与吸呼等长，哪种方式更适合睡前状态调节？",
    answer: "两种方式都常见于实践，但直接比较证据有限。应在相同总时长、呼吸频率和指导方式下比较生理与主观结果。",
    why: "它可以把模糊的“深呼吸”转化为可测试、可个性化的 protocol。",
    knowledge: ["呼吸比例与频率是不同变量。", "舒适与依从性可能影响实际效果。", "并非所有人都适合屏息或复杂节律。"],
    open: ["最小有效时长是多少？", "不同人群的舒适区是否不同？"],
    sources: [["呼吸工作坊", SOURCE_URLS.breath]]
  },
  {
    id: "I-03", domain: "intervention", status: "backlog", evidence: "C", updated: "—",
    title: "Yoga Nidra 对睡眠与唤醒调节的机制和证据是什么？",
    answer: "Yoga Nidra 可能结合身体扫描、注意力引导和深度放松，但传统术语与现代研究结局之间缺少稳定映射，需要把实践拆成可比较的组成部分。",
    why: "它帮助判断传统身心实践能否转译为 evidence-informed consumer protocol。",
    knowledge: ["练习包含多种可能起效的成分。", "传统经验不能自动替代临床证据。", "内容、声音和预期都可能影响结果。"],
    open: ["它与正念、NSDR、渐进式肌肉放松有何差异？", "效果来自内容、声音还是练习预期？"],
    sources: [["Yoga Philosophy", SOURCE_URLS.yoga], ["身心练习知识地图", SOURCE_URLS.mindBodyMap]]
  },
  {
    id: "I-04", domain: "intervention", status: "backlog", evidence: "C", updated: "—",
    title: "什么人更适合呼吸，什么人更适合冥想或 CBT-I？",
    answer: "1.0 假设应根据问题机制、学习成本、即时状态和依从性匹配干预，而不是寻找对所有人最好的单一方法。",
    why: "它是个性化身心干预和内容推荐的核心问题。",
    knowledge: ["呼吸反馈快且学习门槛低。", "冥想可能需要更长练习与指导。", "CBT-I 对慢性失眠证据更强但依从性挑战明显。"],
    open: ["哪些可观察特征能预测方法匹配？", "能否用短期试验快速完成个体匹配？"],
    sources: [["身心练习知识地图", SOURCE_URLS.mindBodyMap], ["呼吸工作坊", SOURCE_URLS.breath], ["The Sleep Revolution｜行为改变视角", books[1].source]]
  },
  {
    id: "I-05", domain: "intervention", status: "backlog", evidence: "D", updated: "—",
    title: "“数息恢复效果比午睡好”在哪些场景中成立？",
    answer: "目前更适合作为待验证假设。数息与午睡可能解决不同状态，也会受到时间、睡眠压力和个体差异影响，不能用课堂经验直接泛化。",
    why: "它可以形成清晰、易沟通的直接比较研究。",
    knowledge: ["个人体验适合产生问题。", "恢复感与客观表现需要分别测量。", "午睡时长和时机会显著影响结果。"],
    open: ["在午后疲劳、压力后恢复和睡眠不足场景中结果是否不同？", "比较应使用主观恢复还是认知任务？"],
    sources: [["呼吸工作坊", SOURCE_URLS.breath]]
  },
  {
    id: "I-06", domain: "intervention", status: "backlog", evidence: "B", updated: "—",
    title: "如何提高 CBT-I 的依从性而不损失疗效？",
    answer: "CBT-I 的核心组成有较强证据，但执行成本和短期不适会影响坚持。更友好的数字化与个性化需要证明没有把有效成分稀释掉。",
    why: "它连接临床有效性与真实世界可用性。",
    knowledge: ["有效方案不等于用户愿意长期执行。", "数字化可以提高可及性。", "降低摩擦可能同时降低干预强度。"],
    open: ["哪些组成是最小有效集合？", "如何安全地个性化执行强度？"],
    sources: [["闭环神经调节睡眠硬件", SOURCE_URLS.hardware]]
  },
  {
    id: "I-07", domain: "intervention", status: "backlog", evidence: "B", updated: "—",
    title: "声音、光线、温度与神经刺激的效果和安全边界有何不同？",
    answer: "这些方法作用机制、时间窗口、设备要求和风险完全不同。1.0 不做统一优劣排序，而要求分别评估测量条件、干预剂量、效果指标和长期安全性。",
    why: "它能避免用“非药物”标签掩盖不同干预的巨大差异。",
    knowledge: ["环境干预通常风险较低但效果依赖场景。", "闭环声音需要可靠识别睡眠状态。", "电刺激需要更严格的安全和监管评估。"],
    open: ["哪些方法已有真实家庭环境证据？", "组合干预是否优于单一干预？"],
    sources: [["闭环神经调节睡眠硬件", SOURCE_URLS.hardware], ["睡眠知识地图", SOURCE_URLS.sleepMap]]
  },
  {
    id: "P-01", domain: "product", status: "published", evidence: "B", updated: "2026-08-31",
    title: "真正的闭环睡眠产品需要完成哪四个环节？",
    answer: "不是“有传感器加 AI”就构成闭环。产品需要连续完成状态感知、需求判断、正确时机干预，以及干预后重新测量并更新策略。",
    why: "它可以用来快速识别产品是真闭环，还是把监测和内容简单拼接。",
    knowledge: ["感知需要测到与决策相关的状态。", "干预必须发生在正确时间窗口。", "验证结果后系统才可能真正学习。"],
    open: ["哪个环节最容易成为真实瓶颈？", "用户可感知 outcome 应如何进入反馈回路？"],
    sources: [["睡眠产品应从监测走向闭环", SOURCE_URLS.closedLoop], ["闭环研究笔记", SOURCE_URLS.hardwareDistilled]]
  },
  {
    id: "P-02", domain: "product", status: "published", evidence: "B", updated: "2026-08-31",
    title: "实验室有效的睡眠干预，为什么到了家庭环境中会失效？",
    answer: "传感器精度、佩戴方式、环境噪声、依从性和人群差异都会造成效果折损。研究必须把机制成立、实验室有效和消费产品有效分开验证。",
    why: "它能避免使用实验室论文直接支持消费产品的强效果声明。",
    knowledge: ["实验室可以控制环境和设备。", "家庭使用存在更多噪声和中断。", "真实效果同时取决于产品体验与科学机制。"],
    open: ["各因素造成的折损比例是多少？", "哪些实验设计更接近真实家庭使用？"],
    sources: [["实验室有效性不等于家庭有效性", SOURCE_URLS.labVsHome], ["闭环研究笔记", SOURCE_URLS.hardwareDistilled], ["The Sleep Revolution｜真实世界依从性", books[1].source]]
  },
  {
    id: "P-03", domain: "product", status: "researching", evidence: "C", updated: "2026-08-31",
    title: "戒指、手表、头带、耳机、床与环境控制的能力边界是什么？",
    answer: "Form factor 会同时决定佩戴时长、信号质量、舒适度、社会接受度和干预能力。因此不能只比较算法准确率，还要比较形态是否支持完整使用闭环。",
    why: "它直接影响硬件选择、目标人群和产品体验。",
    knowledge: ["靠近大脑的形态可能获得不同信号。", "低摩擦设备更容易长期使用。", "能监测的设备不一定能安全干预。"],
    open: ["每种形态最有价值的独特能力是什么？", "用户愿意为多少精度承受多少佩戴负担？"],
    sources: [["健康硬件形态就是产品能力", SOURCE_URLS.formFactor], ["睡眠知识地图", SOURCE_URLS.sleepMap]]
  },
  {
    id: "P-04", domain: "product", status: "backlog", evidence: "C", updated: "—",
    title: "什么干预只需要软件，什么干预必须依赖专有硬件？",
    answer: "内容指导、行为支持和部分环境建议可以由软件完成；需要实时生理状态、精确时机或物理刺激的干预可能需要硬件。边界取决于问题和预期 outcome。",
    why: "它决定产品成本、差异化和上市路径。",
    knowledge: ["软件更易分发和迭代。", "硬件可以获得独特信号并执行物理干预。", "硬件并不自动带来更强效果。"],
    open: ["哪些高价值场景必须拥有第一方传感器？", "环境设备能否替代穿戴式硬件？"],
    sources: [["AI × Wellness 知识地图", SOURCE_URLS.aiWellness], ["健康硬件形态就是产品能力", SOURCE_URLS.formFactor]]
  },
  {
    id: "P-05", domain: "product", status: "backlog", evidence: "C", updated: "—",
    title: "哪些数据必须自己采，哪些可以依赖现有 wearable 生态？",
    answer: "应围绕产品必须做出的独特决策反推数据需求。通用趋势数据可以来自生态；与专有干预时机、闭环学习和长期壁垒相关的数据更可能需要自己采集。",
    why: "它影响研发投入、数据壁垒和生态依赖。",
    knowledge: ["数据越多不等于决策越好。", "外部数据的权限与质量可能变化。", "专有干预反馈数据可能形成复利。"],
    open: ["哪些数据在现有 API 中足够稳定？", "用户是否愿意为更精细数据增加佩戴负担？"],
    sources: [["AI × Wellness 知识地图", SOURCE_URLS.aiWellness], ["输出与项目", SOURCE_URLS.outputs]]
  },
  {
    id: "P-06", domain: "product", status: "backlog", evidence: "B", updated: "—",
    title: "Wellness claim、疾病治疗 claim 与医疗器械路径如何影响产品定义？",
    answer: "产品声称的用途会改变证据、风险管理和监管要求。越接近诊断或治疗，越不能只依赖消费级体验研究和营销语言。",
    why: "它需要在产品定义早期决定，而不是上市前才补充。",
    knowledge: ["相同硬件可以因用途声明进入不同路径。", "诊断和治疗声明需要更严格证据。", "安全转介和免责声明不能替代合规设计。"],
    open: ["不同市场的路径有何关键差异？", "哪些功能适合先以通用健康方式验证？"],
    sources: [["睡眠知识地图", SOURCE_URLS.sleepMap], ["闭环神经调节睡眠硬件", SOURCE_URLS.hardware]]
  },
  {
    id: "P-07", domain: "product", status: "researching", evidence: "C", updated: "2026-09-02",
    title: "智能枕头是否是解决入睡困难的合适产品载体？",
    answer: "当前结论是不进入 1.0。枕头只有在温度、体位、私密声音或呼吸代理信号中的某一项形成不可替代的干预闭环，并在家庭实验中带来相对手机、耳机或现有 wearable 的增量效果时，才是合理载体。",
    why: "它把“想做一种硬件”改写为可以比较、可以失败的产品命题。",
    knowledge: ["温度、声音、体位与呼吸监测对应不同机制。", "舒适度和整夜无感使用可能是枕头的潜在优势。", "传感器更多、离头更近或形态更新颖，并不自动等于效果更好。"],
    open: ["哪一种机制必须依赖枕头才能完成？", "加入枕头后，核心效果或依从性相对软件方案提高多少才值得承担硬件成本？"],
    sources: [["AASM｜消费级睡眠技术立场", "https://aasm.org/advocacy/position-statements/consumer-sleep-technology/"], ["AASM｜失眠行为与心理治疗指南", "https://aasm.org/new-guideline-supports-behavioral-psychological-treatments-for-insomnia/"]]
  },
  {
    id: "L-01", domain: "longterm", status: "backlog", evidence: "C", updated: "—",
    title: "睡眠碎片化、类淋巴系统与阿尔茨海默病之间是因果关系吗？",
    answer: "现有研究提供了机制线索和关联证据，但从短期生理变化推导到长期疾病预防仍存在巨大跨越，需要区分动物、观察性和干预证据。",
    why: "它会改变睡眠干预的长期健康价值，但也最容易被过度宣传。",
    knowledge: ["睡眠与脑代谢清除存在研究线索。", "睡眠碎片化与认知风险可能相关。", "相关性不能直接证明改善睡眠可以预防疾病。"],
    open: ["改善睡眠能否改变疾病风险？", "什么生物标志物可以支持长期追踪？"],
    sources: [["闭环神经调节睡眠硬件", SOURCE_URLS.hardware]]
  },
  {
    id: "L-02", domain: "longterm", status: "backlog", evidence: "B", updated: "—",
    title: "睡眠如何分别影响记忆、情绪与创造力？",
    answer: "多个睡眠阶段可能参与记忆巩固、情绪处理和信息重组，但不同任务与人群的效应不完全一致。1.0 不把复杂功能归因于单一阶段。",
    why: "它把睡眠价值从“睡了多久”扩展到次日功能。",
    knowledge: ["睡眠与学习记忆密切相关。", "睡眠不足会影响情绪调节。", "创造力相关结论需要谨慎解释。"],
    open: ["哪些次日任务最适合公开、低成本测量？", "单夜改善是否能转化为长期认知收益？"],
    sources: [["《超越百岁》笔记", SOURCE_URLS.outlive], ["闭环神经调节睡眠硬件", SOURCE_URLS.hardware], ["Why We Sleep｜睡眠与次日功能", books[0].source]]
  },
  {
    id: "L-03", domain: "longterm", status: "backlog", evidence: "B", updated: "—",
    title: "深夜进食、饮酒、压力与夜间血糖如何共同影响睡眠？",
    answer: "这些因素可能通过代谢、激素、体温和睡眠结构共同作用，但个体差异和反向因果明显。应避免把单夜 CGM 或 wearable 变化直接解释成单一原因。",
    why: "它连接睡眠、代谢与日常行为，也非常适合个体内研究。",
    knowledge: ["晚间进食和饮酒可能影响睡眠连续性。", "压力会影响皮质醇和主观唤醒。", "夜间血糖变化并非睡眠质量的直接替代指标。"],
    open: ["不同晚餐时间对同一个人的稳定效应多大？", "可否用 N-of-1 设计获得个性化结论？"],
    sources: [["《超越百岁》笔记", SOURCE_URLS.outlive]]
  },
  {
    id: "L-04", domain: "longterm", status: "researching", evidence: "C", updated: "2026-08-31",
    title: "睡眠能否成为 AI Wellness 的入口，并扩展到更广义的状态管理？",
    answer: "睡眠具备高频、强痛点、可测量和可干预等优势，适合作为切入口；但长期价值需要扩展到恢复、压力、认知和行为，而不是只优化睡眠分数。",
    why: "它决定网站与潜在产品的长期边界。",
    knowledge: ["睡眠是日常高频状态。", "睡眠与白天行为形成反馈循环。", "连续状态管理需要跨场景的长期上下文。"],
    open: ["第一个相邻状态应该是压力、恢复还是认知表现？", "如何扩展而不失去专业聚焦？"],
    sources: [["AI × Wellness 知识地图", SOURCE_URLS.aiWellness], ["输出与项目", SOURCE_URLS.outputs]]
  }
];

const evidenceLibrary = [
  {
    id: "E-01", grade: "A", year: "2021", organization: "AASM",
    type: "临床实践指南", title: "成人慢性失眠的行为与心理治疗",
    population: "成人慢性失眠患者",
    finding: "强推荐多组分 CBT-I；对简短治疗、刺激控制、睡眠限制和放松治疗作条件推荐；不建议把睡眠卫生单独作为治疗。",
    effect: "指南依据系统证据分级，不提供一个可跨干预使用的单一效应量。",
    limitation: "适用于慢性失眠的治疗证据，不能直接外推为所有泛健康用户的产品效果。",
    decision: "把 CBT-I 核心成分放入 1.0；放松/呼吸是辅助入口，不以睡眠卫生内容作为完整方案。",
    url: "https://aasm.org/new-guideline-supports-behavioral-psychological-treatments-for-insomnia/"
  },
  {
    id: "E-02", grade: "B", year: "2020", organization: "Sleep Medicine Reviews",
    type: "系统综述与 Meta-analysis", title: "数字 CBT-I 与面对面 CBT-I 的效果比较",
    population: "33 项研究；数字干预 4,719 人，对照 4,645 人",
    finding: "数字 CBT-I 在干预后、短期随访和一年随访均改善失眠严重度。",
    effect: "干预后 ISI 均差 −5.00（95% CI −5.68 至 −4.33）；异质性 I²=79%。",
    limitation: "研究设计与产品差异大；高异质性意味着平均效应不能直接作为单一产品承诺。",
    decision: "软件优先有依据，但必须为自己的具体产品重新验证效果与依从性。",
    url: "https://pubmed.ncbi.nlm.nih.gov/32950013/"
  },
  {
    id: "E-03", grade: "B", year: "2025", organization: "Sleep Medicine Reviews",
    type: "系统综述与 Meta-analysis", title: "全自动数字 CBT-I 的随机试验证据",
    population: "29 项随机对照试验；9,475 名参与者",
    finding: "全自动数字 CBT-I 对失眠严重度有中到大的干预后平均效果。",
    effect: "SMD −0.71（95% CI −0.88 至 −0.54）；异质性 I²=91%。",
    limitation: "极高异质性；不同产品、样本和对照条件下效果不可简单互换。",
    decision: "AI 可以提高交付和个性化，但不能因为采用 AI 就继承文献中的平均疗效。",
    url: "https://pubmed.ncbi.nlm.nih.gov/40075149/"
  },
  {
    id: "E-04", grade: "C", year: "2026", organization: "Sleep Medicine Reviews",
    type: "系统综述", title: "睡前慢呼吸对睡眠的影响",
    population: "9 项研究；457 名参与者；睡前呼吸频率 ≤10 次/分钟",
    finding: "主观睡眠时长和质量出现改善信号，部分研究观察到自主神经变化；客观睡眠结果仍不确定。",
    effect: "研究方法和结局差异较大，综述未给出可用于产品承诺的统一合并效应。",
    limitation: "证据量小；客观测量研究仅 3 项且均为单日干预，需要更长、更高质量家庭试验。",
    decision: "可作为低风险的状态切换模块验证，不能宣称其可治疗失眠或稳定改变睡眠结构。",
    url: "https://www.sciencedirect.com/science/article/pii/S1087079226000560"
  },
  {
    id: "E-05", grade: "A", year: "2017", organization: "AASM",
    type: "临床实践指南", title: "成人阻塞性睡眠呼吸暂停的诊断检测",
    population: "疑似 OSA 的成人",
    finding: "问卷或临床工具不能单独诊断 OSA；在适合人群中应使用 PSG 或技术充分的家庭睡眠呼吸暂停检测。",
    effect: "诊断指南以推荐强度呈现，不以单一治疗效应量呈现。",
    limitation: "消费产品可以提示风险，但不能用代理信号取代医学诊断流程。",
    decision: "产品必须有红旗筛查和转介；不得把枕头、手表或算法输出写成 OSA 诊断。",
    url: "https://aasm.org/wp-content/uploads/2017/07/diagnostic-testing-OSA.pdf"
  },
  {
    id: "E-06", grade: "A", year: "2018", organization: "AASM",
    type: "专业立场声明", title: "消费级睡眠技术的临床边界",
    population: "面向消费者的睡眠技术及其用户",
    finding: "未经验证或监管许可的消费技术不能用于诊断或治疗睡眠障碍，可用于促进用户与临床医生沟通。",
    effect: "立场声明，不适用临床效应量。",
    limitation: "技术更新很快，具体设备仍需查看各自验证研究和适用人群。",
    decision: "wearable 数据只做趋势与对话线索；产品文案必须区分 wellness、筛查提示和诊断。",
    url: "https://aasm.org/advocacy/position-statements/consumer-sleep-technology/"
  },
  {
    id: "E-07", grade: "A", year: "2020", organization: "AASM",
    type: "专业立场声明", title: "人工智能在睡眠医学中的应用",
    population: "睡眠医学中的 AI 开发者、临床人员与患者",
    finding: "AI 系统需要明确目标人群和用途，接受独立测试、持续监督并提高透明度。",
    effect: "立场声明，不适用临床效应量。",
    limitation: "给出治理原则，不证明任何具体 AI 产品有效。",
    decision: "AI 的 1.0 角色限定为解释、个性化和依从性支持；关键判断保留人工和转介边界。",
    url: "https://pubmed.ncbi.nlm.nih.gov/32022674/"
  },
  {
    id: "E-08", grade: "B", year: "2024", organization: "BMC Medical Research Methodology",
    type: "方法学系统综述", title: "ISI 临床重要变化阈值的使用一致性",
    population: "81 项使用 ISI 的失眠随机试验",
    finding: "只有 38.3% 的试验使用 MIC 或 MCID；最常见的个体改善阈值是 ISI 下降 6 分，但已发表阈值并不一致。",
    effect: "MIC 常见为 6 分、范围 3–8；MCID 常见为 4 分、范围 2.8–4。",
    limitation: "阈值定义与用途不同，不能把一个数字当成所有人群和产品的统一成功标准。",
    decision: "把 ISI 下降 ≥6 分作为首轮预注册的内部 responder 门槛，并同时报告连续变化和对照差异。",
    url: "https://pubmed.ncbi.nlm.nih.gov/39118002/"
  }
];

const researchPortfolio = [
  {
    index: "01", level: "已有权威解法", title: "把有效方法做得更可及",
    examples: ["慢性失眠的一线 CBT-I", "刺激控制与睡眠行为调整", "高风险人群的医学转介"],
    focus: "重点不是重新发明机制，而是降低门槛、提高依从性、保证有效成分不被稀释。",
    decision: "1.0 核心"
  },
  {
    index: "02", level: "实验有效，产品化未定", title: "验证真实家庭效果折损",
    examples: ["睡前慢呼吸与放松", "消费级睡眠监测", "声音、温度与闭环干预"],
    focus: "重点解决传感精度、干预时机、舒适度、依从性，以及从实验室到家庭的效果折损。",
    decision: "受控试验"
  },
  {
    index: "03", level: "没有稳定答案", title: "形成可失败的原创假设",
    examples: ["AI 能否改善方法匹配", "睡眠改善能否带动恢复与压力", "专有硬件是否带来增量效果"],
    focus: "先写清目标人群、可测结果与停止标准，用实验淘汰假设，而不是用趋势支撑故事。",
    decision: "研究储备"
  }
];

const kindLabels = {
  science: "科学问题",
  product: "产品问题",
  strategy: "战略假设"
};

const questionEvidence = {
  "M-04": ["E-04"], "T-02": ["E-01", "E-02", "E-04"], "T-04": ["E-05", "E-06"],
  "Q-01": ["E-05", "E-06"], "Q-02": ["E-08"], "Q-03": ["E-06"],
  "I-01": ["E-04"], "I-04": ["E-01", "E-04"], "I-06": ["E-01", "E-02", "E-03"],
  "P-02": ["E-02", "E-03", "E-04"], "P-03": ["E-06"], "P-04": ["E-02", "E-03", "E-06"],
  "P-06": ["E-05", "E-06"], "P-07": ["E-01", "E-04", "E-06"], "L-04": ["E-07"]
};

const decisionReadyPlans = {
  "T-02": {
    target: "25–45 岁、压力相关入睡困难且无明显医疗红旗的成人",
    mechanism: "睡前高唤醒与不稳定睡眠行为",
    carrier: "手机软件；可选接入现有 wearable 趋势",
    metric: "ISI、睡眠日记 SOL、次日恢复、完成率",
    experiment: "60 人、2 周基线 + 4 周随机家庭试验",
    gate: "出现相对对照的效果信号且依从性达标；无安全问题"
  },
  "I-01": {
    target: "睡前主观高唤醒、能够舒适完成慢呼吸的成人",
    mechanism: "自主神经、注意力与主观安全感的短时状态切换",
    carrier: "软件音频/触觉引导；不需专有硬件",
    metric: "练习前后唤醒感、SOL、次日恢复；HRV 仅作探索",
    experiment: "交叉设计比较慢呼吸、等时安静休息与睡眠卫生内容",
    gate: "先证明增量效果，再决定是否并入核心方案"
  },
  "I-06": {
    target: "适合数字化 CBT-I、愿意完成结构化训练的成人",
    mechanism: "保留 CBT-I 核心成分，减少学习和执行摩擦",
    carrier: "结构化数字课程 + AI 解释与依从性支持",
    metric: "ISI、模块完成率、脱落率、不良体验",
    experiment: "数字核心方案对比加入 AI 适应性支持",
    gate: "依从性提高且疗效不劣于固定数字方案"
  },
  "P-07": {
    target: "首先由已验证干预决定；不能以所有睡眠用户为目标",
    mechanism: "温度、体位、私密声音或呼吸代理信号必须四选一先验证",
    carrier: "枕头对比手机、耳机、床垫和现有 wearable",
    metric: "目标睡眠结果、舒适度、整夜使用率、误报率与增量成本",
    experiment: "软件方案通过后，再做同一干预的枕头版随机交叉家庭试验",
    gate: "只有效果或依从性出现可辨别增量才 Go；否则停止硬件"
  }
};

const statusLabels = {
  published: "已有研究",
  researching: "研究中",
  backlog: "待研究"
};

const state = {
  domain: "all",
  kind: "all",
  status: "all",
  search: "",
  activeQuestionId: questions.find((question) => question.id === "Q-01").id
};

const elements = {
  domainGrid: document.querySelector("#domain-grid"),
  bookGrid: document.querySelector("#book-grid"),
  evidenceGrid: document.querySelector("#evidence-grid"),
  portfolioGrid: document.querySelector("#portfolio-grid"),
  domainFilter: document.querySelector("#domain-filter"),
  kindFilter: document.querySelector("#kind-filter"),
  statusFilter: document.querySelector("#status-filter"),
  searchInput: document.querySelector("#question-search"),
  resetFilters: document.querySelector("#reset-filters"),
  questionCount: document.querySelector("#question-count"),
  questionList: document.querySelector("#question-list"),
  questionDetail: document.querySelector("#question-detail"),
  menuToggle: document.querySelector(".menu-toggle"),
  siteNav: document.querySelector("#site-nav"),
  toast: document.querySelector("#toast")
};

function renderBooks() {
  elements.bookGrid.innerHTML = books.map((book, index) => `
    <article class="book-card" id="book-${book.id}">
      <div class="book-header">
        <span class="book-index">0${index + 1}</span>
        <span class="book-lens">${book.lens}</span>
      </div>
      <p class="book-kicker">${book.chineseTitle}</p>
      <h3>${book.title}</h3>
      <p class="book-author">${book.author}</p>
      <p class="book-framing">${book.framing}</p>
      <div class="book-domains" aria-label="对应研究板块">
        ${book.domains.map((domain) => `<span>${domain}</span>`).join("")}
      </div>
      <details>
        <summary>查看知识点与待研究问题 <span aria-hidden="true">＋</span></summary>
        <div class="book-detail">
          <h4>五个知识点</h4>
          <ol>${book.points.map((point) => `<li>${point}</li>`).join("")}</ol>
          <h4>转化出的待研究问题</h4>
          <ul>${book.questions.map((question) => `<li>${question}</li>`).join("")}</ul>
          <p class="book-caveat"><strong>使用边界：</strong>${book.caveat}</p>
          <a class="book-source" href="${book.source}" target="_blank" rel="noreferrer">查看出版社书目页 ↗</a>
        </div>
      </details>
    </article>
  `).join("");
}

function renderEvidence() {
  elements.evidenceGrid.innerHTML = evidenceLibrary.map((item) => `
    <article class="evidence-card" id="evidence-${item.id}">
      <div class="evidence-card-head">
        <span class="evidence-grade grade-${item.grade.toLowerCase()}">${item.grade}</span>
        <span>${item.id} · ${item.year}</span>
      </div>
      <p class="evidence-type">${item.type} · ${item.organization}</p>
      <h3><a href="${item.url}" target="_blank" rel="noreferrer">${item.title} ↗</a></h3>
      <p class="evidence-finding">${item.finding}</p>
      <p class="effect-line"><strong>效应量 / 推荐：</strong>${item.effect}</p>
      <details>
        <summary>查看人群、局限与决策影响 <span aria-hidden="true">＋</span></summary>
        <dl>
          <div><dt>研究人群</dt><dd>${item.population}</dd></div>
          <div><dt>局限性</dt><dd>${item.limitation}</dd></div>
          <div><dt>产品决策</dt><dd>${item.decision}</dd></div>
        </dl>
      </details>
    </article>
  `).join("");
}

function renderPortfolio() {
  elements.portfolioGrid.innerHTML = researchPortfolio.map((item) => `
    <article class="portfolio-card">
      <div class="portfolio-top"><span>${item.index}</span><em>${item.decision}</em></div>
      <p class="portfolio-level">${item.level}</p>
      <h3>${item.title}</h3>
      <ul>${item.examples.map((example) => `<li>${example}</li>`).join("")}</ul>
      <p class="portfolio-focus"><strong>研究重点：</strong>${item.focus}</p>
    </article>
  `).join("");
}

function getDomain(domainId) {
  return domains.find((domain) => domain.id === domainId);
}

function getQuestion(questionId) {
  return questions.find((question) => question.id === questionId);
}

function getQuestionKind(question) {
  if (["T-02", "L-04"].includes(question.id)) return "strategy";
  if (question.domain === "product") return "product";
  return "science";
}

function getEvidenceById(evidenceId) {
  return evidenceLibrary.find((item) => item.id === evidenceId);
}

function getFilteredQuestions() {
  const normalizedSearch = state.search.trim().toLocaleLowerCase("zh-CN");
  return questions.filter((question) => {
    const matchesDomain = state.domain === "all" || question.domain === state.domain;
    const matchesKind = state.kind === "all" || getQuestionKind(question) === state.kind;
    const matchesStatus = state.status === "all" || question.status === state.status;
    const haystack = [
      question.id,
      question.title,
      question.answer,
      question.why,
      kindLabels[getQuestionKind(question)],
      ...question.knowledge,
      ...question.open
    ].join(" ").toLocaleLowerCase("zh-CN");
    const matchesSearch = !normalizedSearch || haystack.includes(normalizedSearch);
    return matchesDomain && matchesKind && matchesStatus && matchesSearch;
  });
}

function renderDomains() {
  elements.domainGrid.innerHTML = domains.map((domain) => {
    const count = questions.filter((question) => question.domain === domain.id).length;
    const activeClass = state.domain === domain.id ? " is-active" : "";
    return `
      <button class="domain-card${activeClass}" type="button" data-domain-card="${domain.id}" aria-pressed="${state.domain === domain.id}">
        <span class="domain-top">
          <span class="domain-icon" aria-hidden="true">${domain.icon}</span>
          <span class="domain-index">${domain.index}</span>
        </span>
        <span>
          <span class="domain-name">${domain.name}</span>
          <span class="domain-description">${domain.description}</span>
        </span>
        <span class="domain-footer">
          <span class="domain-question-count">${count} 个问题</span>
          <span class="domain-arrow" aria-hidden="true">↗</span>
        </span>
      </button>
    `;
  }).join("");

  document.querySelectorAll("[data-domain-card]").forEach((button) => {
    button.addEventListener("click", () => {
      state.domain = button.dataset.domainCard;
      state.kind = "all";
      state.status = "all";
      state.search = "";
      elements.domainFilter.value = state.domain;
      elements.kindFilter.value = "all";
      elements.statusFilter.value = "all";
      elements.searchInput.value = "";
      renderAll();
      document.querySelector("#questions").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderFilters() {
  if (elements.domainFilter.options.length === 1) {
    domains.forEach((domain) => {
      const option = document.createElement("option");
      option.value = domain.id;
      option.textContent = domain.name;
      elements.domainFilter.append(option);
    });
  }
  elements.domainFilter.value = state.domain;
  elements.kindFilter.value = state.kind;
  elements.statusFilter.value = state.status;
  elements.searchInput.value = state.search;
}

function ensureActiveQuestion(filteredQuestions) {
  if (!filteredQuestions.some((question) => question.id === state.activeQuestionId)) {
    state.activeQuestionId = filteredQuestions[0]?.id ?? null;
  }
}

function renderQuestionList() {
  const filteredQuestions = getFilteredQuestions();
  ensureActiveQuestion(filteredQuestions);
  elements.questionCount.textContent = `显示 ${filteredQuestions.length} / ${questions.length} 个问题`;

  if (!filteredQuestions.length) {
    elements.questionList.innerHTML = `<div class="empty-state">没有匹配的问题。可以清除筛选后重试。</div>`;
    elements.questionDetail.innerHTML = `<p class="detail-copy">请选择其他板块或研究状态。</p>`;
    return;
  }

  elements.questionList.innerHTML = filteredQuestions.map((question) => {
    const domain = getDomain(question.domain);
    const kind = getQuestionKind(question);
    const activeClass = state.activeQuestionId === question.id ? " is-active" : "";
    return `
      <button class="question-item${activeClass}" type="button" data-question-id="${question.id}" aria-pressed="${state.activeQuestionId === question.id}">
        <span class="question-id">${question.id}</span>
        <span>
          <span class="question-title">${question.title}</span>
          <span class="question-meta">
            <span class="kind-tag kind-${kind}">${kindLabels[kind]}</span>
            <span>${domain.name}</span>
            <span>${statusLabels[question.status]}</span>
            <span>证据 ${question.evidence}</span>
          </span>
        </span>
        <span class="question-arrow" aria-hidden="true">↗</span>
      </button>
    `;
  }).join("");

  document.querySelectorAll("[data-question-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeQuestionId = button.dataset.questionId;
      renderQuestionList();
      renderQuestionDetail();
      const url = new URL(window.location.href);
      url.searchParams.set("question", state.activeQuestionId);
      url.hash = "questions";
      window.history.replaceState({}, "", url);
      if (window.matchMedia("(max-width: 980px)").matches) {
        elements.questionDetail.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function renderQuestionDetail() {
  const question = getQuestion(state.activeQuestionId);
  if (!question) return;
  const domain = getDomain(question.domain);
  const kind = getQuestionKind(question);
  const linkedEvidence = (questionEvidence[question.id] ?? []).map(getEvidenceById).filter(Boolean);
  const plan = decisionReadyPlans[question.id];
  const evidenceMarkup = linkedEvidence.length
    ? linkedEvidence.map((item) => `<li><a href="#evidence-${item.id}"><strong>${item.id} · ${item.grade}</strong><span>${item.title}</span></a></li>`).join("")
    : `<li class="evidence-gap"><span>尚未绑定外部权威证据；当前内容只能作为研究线索，不能支持产品决策。</span></li>`;
  const planMarkup = plan ? `
    <div class="brief-grid">
      <div><span>目标人群</span><p>${plan.target}</p></div>
      <div><span>可改变机制</span><p>${plan.mechanism}</p></div>
      <div><span>软件 / 硬件</span><p>${plan.carrier}</p></div>
      <div><span>核心指标</span><p>${plan.metric}</p></div>
      <div><span>最小实验</span><p>${plan.experiment}</p></div>
      <div><span>决策门槛</span><p>${plan.gate}</p></div>
    </div>` : `
    <div class="research-gap-box">
      <strong>未决策就绪</strong>
      <p>已有用户痛点、当前答案与未知问题；仍需补齐明确目标人群、可改变机制、软件/硬件方案、核心指标、最小实验和 Go / Adjust / Stop 标准。</p>
    </div>`;

  elements.questionDetail.innerHTML = `
    <div class="detail-topline">
      <span class="status-pill">${statusLabels[question.status]}</span>
      <span class="kind-tag kind-${kind}">${kindLabels[kind]}</span>
      <span>${domain.name}</span>
      <span>证据等级 ${question.evidence}</span>
      <span>更新 ${question.updated}</span>
    </div>
    <h3>${question.title}</h3>
    <div class="readiness-banner ${plan ? "is-ready" : "is-gap"}">
      <strong>${plan ? "已补齐 1.0 决策结构" : "探索中 · 未决策就绪"}</strong>
      <span>${linkedEvidence.length ? `已绑定 ${linkedEvidence.length} 条外部证据` : "尚无外部权威证据"}</span>
    </div>
    <span class="detail-label">Current answer</span>
    <p class="detail-copy">${question.answer}</p>
    <span class="detail-label">Why it matters</span>
    <p class="detail-copy">${question.why}</p>
    <span class="detail-label">Knowledge points</span>
    <ul class="knowledge-list">${question.knowledge.map((point) => `<li>${point}</li>`).join("")}</ul>
    <span class="detail-label">Open questions</span>
    <ul class="open-question-list">${question.open.map((point) => `<li>${point}</li>`).join("")}</ul>
    <span class="detail-label">Product research brief</span>
    ${planMarkup}
    <span class="detail-label">Authoritative evidence</span>
    <ul class="question-evidence-list">${evidenceMarkup}</ul>
    <span class="detail-label">Background leads · not evidence</span>
    <ul class="source-list">${question.sources.map(([label, url]) => `<li>${url ? `<a href="${url}" target="_blank" rel="noreferrer">${label} ↗</a>` : `<span>${label}</span>`}</li>`).join("")}</ul>
    <div class="detail-actions">
      <button type="button" data-copy-link>复制此问题链接</button>
      <button type="button" data-copy-outline>复制研究提纲</button>
    </div>
  `;

  elements.questionDetail.querySelector("[data-copy-link]").addEventListener("click", () => {
    const url = new URL(window.location.href);
    url.searchParams.set("question", question.id);
    url.hash = "questions";
    copyText(url.toString(), "问题链接已复制");
  });

  elements.questionDetail.querySelector("[data-copy-outline]").addEventListener("click", () => {
    const outline = [
      `研究问题：${question.title}`,
      `问题类型：${kindLabels[kind]}`,
      "",
      `为什么重要：${question.why}`,
      "",
      "当前答案：",
      question.answer,
      "",
      "待研究问题：",
      ...question.open.map((item) => `- ${item}`),
      "",
      `证据等级：${question.evidence}`,
      `外部证据：${linkedEvidence.map((item) => item.id).join("、") || "待补"}`,
      ...(plan ? ["", "产品研究简报：", `- 目标人群：${plan.target}`, `- 可改变机制：${plan.mechanism}`, `- 软件 / 硬件：${plan.carrier}`, `- 核心指标：${plan.metric}`, `- 最小实验：${plan.experiment}`, `- 决策门槛：${plan.gate}`] : [])
    ].join("\n");
    copyText(outline, "研究提纲已复制");
  });
}

function renderAll() {
  renderDomains();
  renderFilters();
  renderQuestionList();
  renderQuestionDetail();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2200);
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast(successMessage);
  }
}

function resetFilters() {
  state.domain = "all";
  state.kind = "all";
  state.status = "all";
  state.search = "";
  renderAll();
}

elements.domainFilter.addEventListener("change", (event) => {
  state.domain = event.target.value;
  renderAll();
});

elements.kindFilter.addEventListener("change", (event) => {
  state.kind = event.target.value;
  renderAll();
});

elements.statusFilter.addEventListener("change", (event) => {
  state.status = event.target.value;
  renderAll();
});

elements.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderQuestionList();
  renderQuestionDetail();
});

elements.resetFilters.addEventListener("click", resetFilters);

elements.menuToggle.addEventListener("click", () => {
  const isOpen = elements.siteNav.classList.toggle("is-open");
  elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
});

elements.siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    elements.siteNav.classList.remove("is-open");
    elements.menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-nav-action='open-questions']").forEach((link) => {
  link.addEventListener("click", () => {
    resetFilters();
  });
});

document.querySelectorAll("[data-nav-action='open-backlog']").forEach((link) => {
  link.addEventListener("click", () => {
    state.domain = "all";
    state.kind = "all";
    state.status = "backlog";
    state.search = "";
    renderAll();
  });
});

const initialUrl = new URL(window.location.href);
const initialQuestion = initialUrl.searchParams.get("question");
if (initialQuestion && getQuestion(initialQuestion)) {
  state.activeQuestionId = initialQuestion;
  state.domain = getQuestion(initialQuestion).domain;
}

renderAll();
renderBooks();
renderEvidence();
renderPortfolio();
