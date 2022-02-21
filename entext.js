/* Version for Tamarack*/

const basics={
    h1:"Basic Program Information",
    organization:"Organization Name",
    program:"Please describe your organization and its work",
    name:"Name(s) completing this assessment",
    date:"Date completed:",
    facilitate:"Who facilitated/co-facilitated the discussion to use the tool? (Designation/title/role)",
    howmany:"How many people were included?",
    stakeholders:"Which stakeholder groups did they represent?",
    inperson:"Did you meet online or in person?",
    howlong:"How long did it take to complete the assessment (minutes)",
    cldyear:"When did your organization adopt a citizen-led or asset-based approach? (year)",
    comment:"Additional comments/feedback",
    multiyear:"Does your initiative have access to multi-year funding? (y/n)",
    save:"Save data",
    sec2:"Who is completing this Assessment?",
}

const dropdowns=`
<div class=wide>
<label>Province where your organizations works<select name=region>
<option value='AB'>Alberta</option>
<option value='BC'>British Columbia</option>
<option value='MB'>Manitoba</option>
<option value='NB'>New Brunswick</option>
<option value='NL'>Newfoundland and Labrador</option>
<option value='NT'>Northwest Territories</option>
<option value='NS'>Nova Scotia</option>
<option value='NU'>Nunavut</option>
<option value='ON'>Ontario</option>
<option value='PE'>Prince Edward Island</option>
<option value='QC'>Quebec</option>
<option value='SK'>Saskatchewan</option>
<option value='YK'>Yukon</option>
</select></label></div>
<div class=wide><label>Level where this program or project operates
<select name=level>
<option value=1>Neighbourhood</option>
<option value=2>City</option>
<option value=3>Region</option>
<option value=4>Town</option>
</select>
</label></div>
<div class=wide><label>Stage of work<select name=stage>
<options value=1>Emerging></option>
<option value=2>Launching our initiative</option>
<option value=3>Forming our plan</option>
<option value=4>Implementing our plan</option>
<option value=5>Sustaining our initiative</option> 
</select></label>
</div>
`;

const dimensions=[
"A: Participation, Inclusion, and Voice",
"B: Local Resources and Knowledge",
"C: Exit Strategy Linked to Sustainability",
"D: Accountability Mechanisms.",
"E: Responsiveness to Context Specific Dynamics",
"F: Collaboration within and amongst communities",
"G:  CLD linked to Sub-National Governments",
"H. Monitoring and Evaluation Practices support CLD",
"I. Facilitation Investment and Intensity"];

const rubric={
p2:["A1. The CLD program ensures the participation of excluded groups.",
"No/insufficient information to make a judgement.",
"Potential factors of exclusion (gender, ethnicity, age, economic status) are not analyzed.",
"Implementers have identified potential factors of exclusion and include the views of these community members. ",
"Implementers strengthen the collective voice in the community of those potentially excluded and build community solidarity.   Note: have voice and are heard but are not decision-makers",
"Those who risk exclusion are central actors in decision making in the program. Note: have voice, are heard and are decision-makers"],
p3:["A2. Community members decide focus of the CLD program BEFORE the actual design of the program.",
"No/insufficient information to make a judgement.",
"Community members had no involvement in the assessment process.",
"Community members actively participated in the assessment process and had involvement in one of the following: (1) designing the process (2) collecting data; (3) analyzing the data; (4) formulating the conclusions.",
"Community members actively participated in the process and had involvement in two or three of the following: (1) designing the process (2) collecting data; (3) analyzing the data; (4) formulating the conclusions.",
"Community members had involvement in all of the following: (1) designing the process (2) collecting data; (3) analyzing the data; (4) formulating the conclusions."],
p4:["A3. Community members play an active role in CLD program design",
"No/insufficient information to make a judgement.",
"Community members had no involvement in the design process.",
"The basis of program design stems from select community members (e.g. leaders or representatives but no participation of wider community members).",
"The basis of program design stems from wide community participatory processes but without consideration of power/gender dynamics, distribution of resources within a community, different poverty-levels, etc.",
"The basis of program design stems from wide community participatory processes with consideration of power/gender dynamics, distribution of resources within a community, different poverty-levels, etc. These considerations are used to create a vision and action plans."],
p5:[
"A4. Community members play an active role in the CLD program implementation (including adaptation)",
"No/insufficient information to make a judgement.",
"Community members had no involvement in the implementation process.",
"Select community members (e.g. leaders or representatives) are kept informed of program performance and decisions regarding implementation or adaption.",
"Community members and local leaders are informed of program performance and can influence decision-making around program activities, and adaptation.",
"Community members (including those at risk of exclusion) and local leaders drive decision-making on on-going program activities, review of program performance and any needs for adaptation."],
p6:[
"A5. The pace of the CLD program is determined collaboratively with communities and, where appropriate, with funders",
"No/insufficient information to make a judgement.",
"The pace of the program is determined by the implementing organization/funder with no community consultation and information dissemination.",
"The pace of the program is determined by the implementing organization/funder. The community is informed of the pace and community feedback is obtained (but not acted upon).",
"The pace of the program is determined by the implementing organization/funder collaboratively/in consultation with community members.",
"The pace of the program is determined collaboratively with community members including representatives of marginalized groups. It is cognizant of the different pace preferred by different groups in the community."],
p7:[
"A6. The CLD program systematically builds the voice and confidence of community members, especially those at risk of exclusion, to express their thoughts, ideas, share experiences, etc.",
"No/insufficient information to make a judgement.",
"The program makes no efforts to build voice and confidence   ",
"The program may build voice and confidence among some community members and/or local leaders but has no systematic approach to doing it.",
"The program is intentional about building voice and confidence among community members and/or local leaders through capacity building and mentoring.",
"The program is intentional about building the voice and confidence of local leaders and community members, including those at risk of marginalization (enabling them to learn, practice how to articulate, and present ideas among other things)"],
p8:[
"A7. The CLD program raises awareness and builds advocacy skills amongst local structures, leaders, and community members to press for their social, economic and political rights",
"No/insufficient information to make a judgement.",
"The program does not raise awareness of peoples’ social, economic and political rights nor does it build advocacy skills",
"The program raises awareness of peoples’ social, economic and political rights but does not build advocacy skills",
"The program raises awareness of peoples’ social, economic and political rights and builds advocacy skills",
"The program raises awareness of peoples’ social, economic and political rights and builds advocacy and social movement skills"],
p9:[
"B1. The CLD program builds on Local Resources and Knowledge",
"No/insufficient information to make a judgement.",
"The program does not consider local resources and knowledge.",
"The program is aware of local resources, but knowledge is transmitted by the front-line staff.",
"The program builds on local resources and takes local knowledge into account.",
"The program uses and celebrates local knowledge and resources. *celebrates refers to recognizing the value of local knowledge and pursuing it."],
p10:[
"B2 Community contributes their resources (e.g. time, cash, labor, land, materials, etc.)",
"No/insufficient information to make a judgement.",
"Community does not contribute towards program implementation in cash or kind or labor.",
"Community members contribute time/labor or resources (land, cash, materials), but only because it is mandatory.",
"Community members contribute time/labor or resources (land, cash, materials), when asked but do not volunteer it.",
"Community members decide what is needed, willingly identify additional resources that would contribute to outcomes (time/labor, land, cash, materials) and volunteer them."],
p11:[
"C1. Communities are central to developing exit strategies of the CLD program",
"No/insufficient information to make a judgement.",
"There is no exit strategy.",
"The exit strategy is created by the implementing organization without consultation with community leaders or community members.",
"The exit strategy has been created in consultation with local leaders and community members.",
"Exit strategy is owned by community members and local leaders."],
p12:[
"C2. Planning for responsible exit is woven throughout the CLD program [all the life-cycle phases]",
"No/insufficient information to make a judgement.",
"There are no exit strategies.",
"The exit strategies are formulated towards the end of the program (very close to closure or at closure).",
"The exit strategies are planned at design and revisited towards the end of the program (very close to closure or at closure).",
"The planning for exit strategies started at design, is iteratively revised during implementation and finalized towards the end of the program."],
p13:[
"C3. Exit strategies of the CLD program describe the mechanisms left in place to ensure sustainability and/or resilience",
"No/insufficient information to make a judgement.",
"There are no exit strategies.",
"There is an exit strategy but does not point to sustainability or resilience mechanisms.",
"There is a logical plan that describes the mechanisms through which desired impact will continue after the intervention has ended.",
"There is a logical plan that describes the mechanisms through which impact determined by community members will continue after the intervention has ended. This includes assessment of capacities/ resources needed by local actors."],
p14:[
"C4. The CLD program impact is measured post-closure with local participation",
"Not applicable",
"Program impact is not planned or measured 2+ years post closure.",
"Program impact is measured (or planned to be measured) 2+ years post-program closure. Community actors are informed about the exercise and provide information as requested.",
"Program impact is measured 2+ years post-program closure. Community actors are consulted about the exercise and provide information as requested.",
"Program impact is measured 2+ years post-program closure. Community actors are active participants in all the stages of the post- program evaluation (design to report to action plan)."],
p15:[
"C5. Community members (including the most marginalized) are still benefiting from CLD program",
"Not applicable",
"The program has left no traceable impact (positive, negative, neutral).",
"Little evidence of sustainable impact is evident. No to little adaptation has happened.",
"Mixed impact but mostly positive. Community members and/or structures have practiced some adaptation and skills gained from the CLD program.",
"Mostly positive evidence. Community members and/or structures have regularly used adaptive mechanisms and skills gained from the CLD program."],
p16:[
"D1 The program fosters partnerships with genuine mutual accountability",
"No/insufficient information to make a judgement.",
"There are no accountability mechanisms that involve the community.",
"Accountability mechanisms exist either from communities to implementing agencies, or from implementing agencies to communities.",
"Two-way accountability mechanisms exist between communities and implementing agencies.",
"Accountability mechanisms are practiced not only between communities and implementing agencies, but within communities themselves and/or with the local leaders (groups or elected councils)."],
p17:[
"D2. The CLD program makes provisions for feedback mechanisms to communities throughout the life-cycle of a project, including via M&E practice",
"No/insufficient information to make a judgement.",
"There are no feedback mechanisms.",
"Feedback to communities is left to facilitators with no systematic approach.",
"Feedback to communities is provided only when key issues arise.",
"Based on M&E data, decentralized interactive learning exercises are used to provide feedback to communities in a systematic way and to help them make plans to address key issues."],
p18:[
"E1. The CLD program is responsive to multiple power differentials and dynamics (e.g. gender, economic status, ethnicity, etc.)",
"No/insufficient information to make a judgement.",
"The program does not assess or consider the power differentials and dynamics in the community.",
"The program design assessments point to differences and dynamics, but there is no strategy to take these differences into account.",
"Community analysis highlights the contextual variation in power relations, but neither the program nor the facilitators are equipped to address them.",
"The Program is responsive to power differentials and dynamics within and across communities and facilitators are equipped to address/maneuver them."],
p19:[
"E2. The CLD program is responsive to community needs and contexts",
"No/insufficient information to make a judgement.",
"The program cannot respond to contextual community needs (program applies a blue-print approach).",
"The program cannot respond to changing community needs and contexts, but the implementing organization looks for other interventions to address these.",
"The program can adapt to a certain extent, but this is limited to the design characteristics.",
"The program is iterative and able to adapt to crises, successes or changes in community needs and contexts.  (e.g. floods, droughts, seasonal hunger, arrival of new technologies, changes in political systems, etc.)"],
p20:[
"F1. The CLD program builds collaborative relationships horizontally, vertically, and across communities [measured as an indicator or described as a process]",
"No/insufficient information to make a judgement.",
"The program does not intend to build collaborative relationships.",
"The program builds horizontal collaborative relationships (e.g. poor to poor; female to female; etc.) within the community.",
"The program builds both horizontal and vertical collaborative relationships (rich to poor, caste to caste, female to male) within the community.",
"Program builds collaborative relationships 1. horizontally (socio-economic, gender, religion); 2.  vertically (socio-economic, castes); 3. across communities."],
p21:[
"F2 The CLD program links local structures or leaders to local federations or wider social movements",
"No/insufficient information to make a judgement.",
"The program does not link local community structures or leaders to any federations or movements.",
"The program links local community structures or leaders to local federations.",
"The program links local community structures or leaders to local and regional federations.",
"The program links local community structures or leaders to local and regional federations and nation-wide social movements."],
p22:[
"G1 The CLD program’s local community structures or leaders are linked to sub-district or district government",
"No/insufficient information to make a judgement.",
"Sub-district or District Government is not aware of the program.",
"Sub-district or District Government is aware of the program, but there is no platform / space for interaction between the participatory community structures or leaders and sub-district or district officials.",
"Sub-district or District Government is aware of the program, and there is ad hoc interaction between the participatory community structures or leaders and sub-district or district officials. The program strengthens the community’s ability to demand its rights/entitlements from sub-district or district government.",
"Sub-district or District Government is aware of the CLD program. The CLD program establishes systematic engagement between the community and sub-district or district government to achieve community goals."],
p23:[
"H1 Participatory monitoring is carried out",
"No/insufficient information to make a judgement.",
"There is no community participatory monitoring.",
"Community monitoring happens but is mostly facilitated by front-line staff.",
"Community monitoring happens and is mostly facilitated by community members. Feedback to the wider community [through participatory sessions] is however ad-hoc.",
"Community Participatory Monitoring (CPM) is central to the M&E approach of the program. Community monitoring is facilitated by community members or structures and includes reporting back to the larger community regularly e.g. every six months."],
p24:[
"H2 Participatory evaluation is carried out",
"No/insufficient information to make a judgement.",
"There is no community participatory evaluation.",
"Community members are involved in ONE or TWO of these evaluation stages: 1) Planning; 2) Data Collection; 3) Analysis; 4) Validation; 5) Conclusions and Recommendation; 6) Action planning.",
"Community members are involved in many (THREE or FOUR) of these evaluation stages: 1) Planning; 2) Data Collection; 3) Analysis; 4) Validation; 5) Conclusions and Recommendation; 6) Action planning.",
"Community members are central in ALL the evaluation stages: 1) Planning; 2) Data Collection; 3) Analysis; 4) Validation; 5) Conclusions and Recommendation; 6) Action planning."],
p25:[
"H3 M&E findings are disaggregated according to sex, disability and other relevant social differences AND acted upon",
"No/insufficient information to make a judgement.",
"No disaggregation of findings by social differences.",
"Findings are disaggregated, but a number of social differences relevant to the intervention are missing. There is little explanation to elucidate why outcomes are different for different groups.",
"Findings are disaggregated according to all social differences relevant to the intervention. There is some explanation to why outcomes are different for different groups and what that means for the program.",
"Findings are disaggregated according to all social differences relevant to the intervention. There is a good explanation to why outcomes are different for different groups and what that means for the program [translated to recommended action]."],
p26:[
"I1 The CLD program facilitators (whether it is community leaders, staff or facilitating partners) are equipped with skills and practice for their roles.",
"No/insufficient information to make a judgement.",
"Facilitators receive a basic orientation in formal training environments/settings eg  classroom.",
"Facilitators are trained in basic facilitation skills as well as participatory analysis and planning in formal training environments (eg classroom).",
"Facilitators are trained in facilitation skills, participatory analysis and planning in the classroom and in communities.",
"Facilitators are trained in facilitation skills, participatory analysis and planning, as well as collective action in the classroom and in communities."],
p27:[
"I2 The CLD program has reasonable provisions to ensure flexibility to respond to changes in demand for community facilitators (e.g. with scale of program, changes in context or pace of CLD)",
"No/insufficient information to make a judgement.",
"No assessment of changes in demand for community facilitators AND/OR No resource provision for increasing scale of program AND/OR No processes in place for reducing numbers of facilitators or slowing pace of program.",
"Ad-hoc assessments of numbers and capacity of community facilitators relative to the context, intended scale of the program and pace of the program. Changes are made if program performance has suffered.",
"Regular assessments of numbers and capacity of community facilitators relative to the context, intended scale of the program and pace of the program. Changes are made ONLY if program performance has suffered.",
"Regular assessments of numbers and capacity of community facilitators relative to the context, intended scale of the program and pace of the program. Program has budgetary provisions and processes in place to respond."],
p28:[
"I3 The CLD program has reasonable provisions to support the quality of local facilitation (clear intake criteria; knowledge and skills assessment; provision of training and support for local facilitators)",
"No/insufficient information to make a judgement.",
"There is no provision to support quality of local facilitation. There is no clear intake criteria, no proper knowledge and skills assessment is undertaken and there is no provision for training and support of local facilitators.",
"There is some ad-hoc provision to support local facilitation. The program has one of the following components built into it: 1) There is a clear intake criteria; 2)  proper knowledge and skills assessment is undertaken; 3) there is provision for training and support of local facilitators.",
"There is a reasonably good provision to support local facilitation. The program has two of the following components built into it: 1) There is a clear intake criteria; 2)  proper knowledge and skills assessment is undertaken; 3) there is provision for training and support of local facilitators.",
"Provisions to support local facilitation are fully integrated into the program. The program has all of the following components built into it: 1) There is a clear intake criteria; 2)  proper knowledge and skills assessment is undertaken; 3) there is provision for training and support of local facilitators."]
}
