import { ScrollView, Text, View } from "react-native";
import Avatar from "@app/components/Avatar/Avatar";

export default function Kafedra() {
  const headDepartmentImg = require('@app/assets/img/kafedra.jpeg');

  return (
    <>
      <ScrollView>
        <Text>
          Кафедра робототехнічних і телекомунікаційних систем та кібербезпеки (РТСК)
        </Text>
        <View>
          <Avatar
            source={headDepartmentImg}
            size={88}
            label={'Завідувач кафедри'}
          />
        </View>
        <View>
          <Text>
            Студенти успішно опановують не тільки стандартні підходи і навички, які 
            притаманні даній спеціальності, але мають можливість поглибити свої знання 
            за такими напрямками, як сучасні технології віддаленого контролю (remote control),
            впровадження сучасних інформаційно-телекомунікаційних технологій, відомих як Internet of Things (IoT)
            – Інтернет речей, опановують системи GPS моніторингу, займаються проектуванням
            і впровадженням технологій «Розумний будинок», вивчають передові технології
            статистичної обробки даних (розробки наукової школи професора Кунченка Ю.П.)
            та здобувають багато інших цікавих навичок і знань, в тому числі від Академії
            Cisco, які дозволять майбутньому фахівцю успішно працевлаштуватися і 
            конкурувати на ринку праці.
            На кафедрі відкрита сучасна лабораторія «Сучасних цифрових рішень та робототехнічних систем»
            за підтримки Обласної державної адміністрації. Лабораторія постійно поповнюється сучасною
            апаратурою від провідних фірм виробників електроніки, зокрема фірми «JABIL» (Ужгород)
            та ін. Покращенню матеріальної бази активно сприяють випускники кафедри, які очолюють провідні компанії України.
            Відтепер студенти кафедри спрямовують свої зусилля та опановують
            такі напрямки досліджень, як: «Розробка системи Розумний будинок»,
            «Розробка системи GPS/GPRS моніторингу»,  «Робототехніка та автоматизація»,
            «Розгортання, налаштування та обслуговування міні IP АТС»,
            «Розробка технічних систем захисту витоку інформації» та ін.
            Сьогодні робототехніку вважають локомотивом нової технологічної революції.
            Багато хто впевнений, що в найближчі роки робототехніка значно вплине на
            якість життя людини, і тому провідні корпорації вже зараз роблять ставку
            на розробку і розвиток сучасних автоматизованих смарт–систем, робототехнічних
            комплексів в різноманітних сферах діяльності людини.
            Робототехніка – це спеціальність майбутнього, а попит на фахівців цієї галузі постійно зростає.
          </Text>
        </View>
      </ScrollView>
    </>
  )
}
