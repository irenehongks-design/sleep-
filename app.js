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

const statusLabels = {
  published: "已有研究",
  researching: "研究中",
  backlog: "待研究"
};

const state = {
  domain: "all",
  status: "all",
  search: "",
  activeQuestionId: questions.find((question) => question.id === "Q-01").id
};

const elements = {
  domainGrid: document.querySelector("#domain-grid"),
  bookGrid: document.querySelector("#book-grid"),
  domainFilter: document.querySelector("#domain-filter"),
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

function getDomain(domainId) {
  return domains.find((domain) => domain.id === domainId);
}

function getQuestion(questionId) {
  return questions.find((question) => question.id === questionId);
}

function getFilteredQuestions() {
  const normalizedSearch = state.search.trim().toLocaleLowerCase("zh-CN");
  return questions.filter((question) => {
    const matchesDomain = state.domain === "all" || question.domain === state.domain;
    const matchesStatus = state.status === "all" || question.status === state.status;
    const haystack = [
      question.id,
      question.title,
      question.answer,
      question.why,
      ...question.knowledge,
      ...question.open
    ].join(" ").toLocaleLowerCase("zh-CN");
    const matchesSearch = !normalizedSearch || haystack.includes(normalizedSearch);
    return matchesDomain && matchesStatus && matchesSearch;
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
      state.status = "all";
      state.search = "";
      elements.domainFilter.value = state.domain;
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
    const activeClass = state.activeQuestionId === question.id ? " is-active" : "";
    return `
      <button class="question-item${activeClass}" type="button" data-question-id="${question.id}" aria-pressed="${state.activeQuestionId === question.id}">
        <span class="question-id">${question.id}</span>
        <span>
          <span class="question-title">${question.title}</span>
          <span class="question-meta">
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

  elements.questionDetail.innerHTML = `
    <div class="detail-topline">
      <span class="status-pill">${statusLabels[question.status]}</span>
      <span>${domain.name}</span>
      <span>证据等级 ${question.evidence}</span>
      <span>更新 ${question.updated}</span>
    </div>
    <h3>${question.title}</h3>
    <span class="detail-label">Current answer</span>
    <p class="detail-copy">${question.answer}</p>
    <span class="detail-label">Why it matters</span>
    <p class="detail-copy">${question.why}</p>
    <span class="detail-label">Knowledge points</span>
    <ul class="knowledge-list">${question.knowledge.map((point) => `<li>${point}</li>`).join("")}</ul>
    <span class="detail-label">Open questions</span>
    <ul class="open-question-list">${question.open.map((point) => `<li>${point}</li>`).join("")}</ul>
    <span class="detail-label">Sources &amp; reading</span>
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
      "",
      `为什么重要：${question.why}`,
      "",
      "当前答案：",
      question.answer,
      "",
      "待研究问题：",
      ...question.open.map((item) => `- ${item}`),
      "",
      `证据等级：${question.evidence}`
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
  state.status = "all";
  state.search = "";
  renderAll();
}

elements.domainFilter.addEventListener("change", (event) => {
  state.domain = event.target.value;
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
