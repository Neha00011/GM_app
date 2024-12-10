import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Card from '../components/card';
import images from '../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type SkinCareNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SkinCare'
>;

export default function GPAndOrtho() {
  const navigation = useNavigation<SkinCareNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={styles.image}
              source={require('../Assets/backarrow.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>SKIN CARE</Text>
      </View>

      <View style={styles.subheading}>
        <Text style={styles.subheadingText}>lorem epsum</Text>
      </View>

      {/* Content Sections */}
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('Image')}>
          <View style={styles.cardContent}>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBBQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xABDEAABAwIEBAMEBwUECwAAAAABAAIDBBEFEiExBhNBUSJhcQcygZEUI0KhscHRFTNSYnKywuHwFyQlQ1NzdYKSorP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAgEQEBAAIDAAMBAQEAAAAAAAAAAQIRAyExBBJBMiIT/9oADAMBAAIRAxEAPwD1BJJFeR6CRSSUCRCVkQoCiEkkUUkvXroEbKKICNtUE6yBBOQARQpIoJKoKSAKKIKSCSApIJICkgkgKF0kigSCSSAFBFAoAkkUkARSSQVUQgitAoOc1oGYgeZNklDU00NU3JPE2Rn8LhdQStljcfBKx3k1wKkvtZYdbgVMKaQ4bGKeqAzRuj0uex9dlBwzxB+0c1JVAMrItCP4raH4jqsq6QJk88VPCZZ5GxtG5cq2JYjBhlPz6p1ujWjd57BcFX4tPitaDOdD+5jbsB0QtdkzF2TytdcRQA+HNq558gtaJ4ePDcDz3XP8O4Q9oE9VrIdr9PJdLHE1rewU1afggJ4Ub5GssEx1QLaArcxqbT3SuqTqy3vNKe2padAVL00tJKNsgPXVOv5qbDuqKbdLMkTRySAcldAUkC5c1x1xFVcP4MKqghhllubiUkAAC526qybSumSusXBsZ/aeGUlY5gY6eIPLWm4C02SZglVPdBNuiCoCkkgqEgUSgiAUkikgSSCSorIopKgI2SRUDXa6Erz/AI0ppMJxyLFKMZHSDObdXDf5j8F3lQ60jLmwuuc46tJh9LGW3L5T4u3hKyZeOVmxP9rVzqrEpHcuCLmBjSQHN0s1v9Rt961OFsP+nVxrnt0v4G2691ykGZ1LVUwGaopbzRN6vaPeH+epXpnB2RuEQGw5j2BzgOl+iyYujp4xGy21glLLZu6ex12H0VSY6r0YTpLTHSF+rUy97uPbZBpsCde2iNtCtoYRmAa70TJY7ai/qpbajp5qGrqGQR6vHNd7jL6k3sPxUvixUNe+nm5Tni590q0yOKqAdLmlP8zzb5bLDxGJ0XLc/wB9xuVr4W68TT3XjvWWnf8AFwYTDI4Ojj5bgPs2I+R0Vepp6qDMKSoGf/hkZWn4LcoD4j6LmsZnMOKNGa1z3WrjPrtjHK26aLcRjpYof2lPFBLJcNBd7xG9vgq0fFuAyS8pmL0b5A7KWiUXB7LneIZM/EHDH/NqP/mvIefyuIcbgDrCSsv8RIuvHhLjtjK37afSjalhPhcD263XnXtSxA1UD8OhcGviZm1Fw8uG3lYdfNamBSzDQOLtNiuN48rYH4nVyU0pme+NnKdG3NlcNHA67WA+9Tiylu2uTG+Oh4ExoVWFR0r7GSjAjLgLZtN7LuKSXM0LyXgGaCGOcCS8sjgS0ix/H1XpdDUNyi2qzlf9JJ03GuungrCqZcTlkeyjdHFGNn7n71znFAxKjjoyMTqC6pnMWkhGS0b33/8AT71uY7S3Tvy+yHMXlnsqxXF8UpZaquxSSaKMgOilF73636L0Rs+Y6G9lMp9bpZdxfz3RuqzZLqVpWRJdJNujdaQUkEkESSSQVCSF76IoqCCppzPHoS13TsfJZGJRiWkdFUdNWOGtit4LCw2R9Q/E4J4yDT1Tg0EbsdqPhus1XnNQw0HEVLMBYPlDHejtD+S7zDXCCYMYLNAAA7KjXYC2sxpjmhohhYHG+510/P5LTfFk5N/eyi6zVxmnRU78zR5qKfcaDwnqmUbvAPJTSRl+oXbDLrTNirv1R6b2SIAJHbRNvl6BdEI77k27qtPR0xqo62WMc6Npa15+yD5XspZJA0XcWgeZWdWVMs3gjaXDoVLZJ2slUMUmdU1oYN75bBb2HsyRhUMPwpzX82XxPO3kttkWVeWz7XbrvU0a2aKGteZpWMa+lIGc22P+K87xOuifNSfRqiN7mNffI69tfJXuM46ivx40pmdBDR0BqGOjaCXOeXNIN+lgF5hwrMJMXhjjLmhzQ17dMtrEi3Vcc/jT+9+OnHnrqfr0TE33x7hWSVwAbJUak9TGB+q8sxdgbxRWHMDetJFv6165imBxcR4NT4a9zY5JahmSZwuYupIt3aC34rlMU4Jfg+M819VDNDDIAGcs3sdtSV2x+RhMJNpeK/8ATx1tG537OrHNJBFO8gjocpXMOw+gh9k+F18VDTisIANQIxzDd+ozbrrcOYHYRV67wyf2Sueq2ZfYxhfUZYz83rXx8dcVZ58t5xyfDOIczFaSEU9PG4TG0kUYY4jTR1t16zhbzcguuQvFeG324ho7AAc63xXseGOu8qcl7i69dHC4EC5suI4rxmXFJpocPpGEYLUudK+eXLnPLeyzRrpaQn1AXYQyNYwve5rWtF3OcdAO5XmLMUo4qnijmzaVs7nQOAJDxa249F14db7cM5WZ7N+JY8HjlpeVzY5nA6OIc34L1qOXZ17g6r58wNs0FUwOjIIGuy9ypatk8Eckb2uaQNRsDbZXmk9hx38rehkurbHrJp5Vfjfdco2ugp11A1ykBWmUiSbdBVARCCIVCTggiEC+CwuLIf8AU/pUJmZVRC7XRMcQR2JH5reRHkpoeb4XxBUulkfVtvGWBoky+I9bW+JXSUkornCVti37Nk/E8HpTXyTBwYC1ngA0zXde3wsszg+qOWWOeMx/XPDAeoDrD7lzs1W5enWU7LNGitMbbVCEAhTlhA2W5OumLVd9PG+5LdVXdRx31VmaQR73VSWuiZ7xIUu41N05tDE77N7Iina06R/IKWjqGvkAGxVwgDYK4aymy2zpTEZAuGH5KuakGodCNCBqtCZ2WMkdFzGHymXEqtxN/HYKZ9a0uM2yeIzbiOt/6U3+2/8AReMcEvvj0Fv4W/gV7hjuA11ZjMmIUr4XNkoPopie4tIOZxzX66OXDcM+y7E8KxSKqqa2nLGbtY03K6ZavHYzMrjlNO/wGHmClcXZeXMJB56EfmhxnhJMzqh0ukjxdob2+K0sMojSho1dburOOwuxAMa1paAb3XlnxuO4f69dsubKcn2jAoqQRYXO228L9P8AtK4vEpTH7E6OxuY8jNPKWy9Phow2Exv2cC0+hC5uu4FjnwT9jR4lUsw/NmEQYwlvizWvbuvVxaxmnDPdu3iHDchOPYce9SL/ACXtWGGz3eap4T7LcIwyrhqudUzyRPztzkDX4Lr6bDo4dWsA+CxySWzTeGWt7eY+0bGq2qrI+HsMLhoH1Jbvbt+a4h074HcuSOVrQLNEoIPqvTGcK4nDxrVYlJQVD4ZpMzHhtwABYHRaXGWF1FVhz2jCpppMtm2gLiPuXowwn1crnrLp4vNM10gMQu7s0Ls+D8UrqKWKKuY5kUugzBYlLguO0UxfFw7XvN9CaZw/JbccfEdS5kT+HapgJtncA23zKtwmtFy729KgfbS+y0IH3WRTtkZHGJRaQMAcOxtqtCncvJ+uv402OUzSqkblO0rTKa6SYCkiJCiECUgqHIoBFAVWxOqfRUM1RFA6d8bbiNu5VhOCDkJ+I6WWOStZSkzl/JjbINgACTftdylwamlrXGsm8Ly/N4RYW/z8Vp0tBTmaoL4muLJiGZm6AWFgFqxNDQAAB5LFm2pUtM22UdgrEps023TI9SLJ0urV1x6jnl6oVhGQXBuudxZzhS5zuCF0dU/6skLmcWN6eYHXquPN/NduL0sGrHtnY0nTMuyBuLrzvD5Ms7fIhegROvE30XP4t3LHT5MkqOqdaN3ouawcj6VUHqZFv177RErk8GnBqJtftldeS9xjD+XWRuBHRNfNHrmOypmawa213H3W/qrk9HC9rWytu8DUg9V0mp65IRVA+4R8Bf7z+ic17nbl/wA2/ogyjhHulwU7IGDcn5rcuKXZnLcdnlvqP0TZDPCLvbdo+03VWMjB9sqRjmjYlP8AKdqkczH9QpmkHZYVXVH6fNGxuV7HHbZ3+KtUVcJWgdVzvTenTxH6tvayD+vT0TaZwMDD3CL17J4899U5iddT81j1J8Wnda850Kx6k+P4qkZcp+td/UfxUkDtVBN++f8A1FPgOq+ffXq/Gmx2yna5VIyp2lWIsB2iKhBSQXEWo2TgFtkEUUECThromoSv5UT5D9lpKghpiXCQkWvK63pdWmhVKFhbAxpvcAbq8wbKeqki94J0hs0gWuiMrHBpIzEXt5Jkuh36rrJqMXuqNWczSNBouerQDDIDubj7lu1WxdfYHRYVWSSRbYbLhnOq7cd1WDRv+sBXoVE4upmHu1ecUx+tA2sF6HhZz0MRH8K4fFmq7/J7iDFHZYH+i4jhmQy1kjb6F+vpuuwxt5bTSG32SuG4VdyqzO86ZtfQrrn/AHHLD+K7ikGepY875rq/O85yqdIAydt+jlYmPiJXTk6c8fQz2Ts57qA3P5JNcCue2tJM56XKe15N9dt1Cdx4gD6osOU+qm7ss6Ytfc4q4t3BA+KrVzjSYp4LhsrWvt67/eCrZGfE39fGVk4xUCoxxzIzcRBsdx3G/wB5K7Zfyzj69Fw52aigd3YFM/ZVsJP+zoB/IrDl7Mb/AJjzZeqVR7pWNU+8tipPhKxao+NaRlTn655/mKfAVXnd9bIP5ipady+ffXqnjSYVM0quwqZpRUwOiSYDokiNVFBBdGDkEkQFNKHRVcQkb9VTgkvldewH2Qrlkw08bqhs7m3la3KHeSaD4mWGymklZSwOnkNg0bW3TRuFBissfJEbmZyLEBaxnW0vZtAXvlNRMCXvGjew7KSrqY4A3mHUnYalVBVSujDGARt/l3KjyX337rO9Lrsypqon3DcxPTRZsjHSElw1WpyR2QdCOy53dbl0w6fDomPBy3PddJhxe2HI02DW6aKqIgCpo3mJpsNSLK4YzG7XLK5RQxXnPa8EC1lzWEQCOV2g811dQHvB81Qp8OEbibE3Uzm8twxuo0KKbJk5gvl2KE1dAHlpLg7zYUo4Q1OdGHe80H1C31l6x4aKyA7P+4o82mJ0dZMMbG/7s/ApwfTt3ZJ/4q/TGp9qcXx/ZdqpGEX3ueiruqo2fu6d7j0voqlW6sqQWBwhjPSLc+pUuGMWZWszFMRdS1U8dJZ9Q69iNRH6+aqYRQuYeY+5ce/qtanwqOMaNF+quR02Tpos3danTMh9peHYXU1OG4lQVkf0Ow58WWRrwRva4I32sVpf6SeFiAX18seYXGellH91UcW4aw3F2u+mQXeRYyMOVy5ar9mNHIRycQrIwNh4XW+YXox5dTtyvG6qr9pHCLA4OxhvpyZL/LKsKq9o/DcsoZSVE9S92zWQObe2v2rLEd7JqdzrvxSpI/obf8FoYX7McHoJmTSS1NS9u2d2UfctXljMwrbhc6riZUtYWtlGcA9AVcp4nDfurTKdrGtY1uVrRZoHQKWOO3ReV2gMaVM0aJwanAIEEkkVTbUCVkkVtggnBNTgqCigkUQimvaHDUfGyKV0WIDEBsEMqmIQIU0I8qRan2slZTSoi0JttVMQmEJoRloJ2QyBSIKCPKllT0lQ3IEOW3tdPSQRGJvZAxja2ilQToRZB2RyKUBGyaEORLIFKQhZNG0RjFtkzl+SsFBNCvywhlU7gmEKaDLIJxTSopJJJINRJJJbYFFJJUJJJJAkkkkUChdJJQJBJJFApqSSUApqCSgSKSSAIFJJAkkEkDwkkkrACggkgSCSSlA3TSkkgjcmFJJZUhskkkg//9k=',
              }}
              style={styles.cardImage}
            />
            <View style={styles.fullcard}>
              <Text style={styles.cardTitle}>IMAGE</Text>
              <Text style={styles.cardDescription}>
                Lorem ipsum dolor sit amets.
              </Text>
              <Text style={styles.cardDescription}>
                Lorem ipsum dolor sit amet.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={[styles.card, styles.pdfCard]}>
        <TouchableOpacity onPress={() => navigation.navigate('Pdf')}>
          <View style={styles.cardContent}>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAxAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABBEAABAwIDAwgIBQMEAQUAAAABAAIDBBEFEiExQXEGEyIyM1FhgRRCUpGhscHRByNy4fBigvEVJDRjskNTkqLC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAIBAwQFBv/EACcRAAICAgMAAQMEAwAAAAAAAAABAhEDBBIhMSITQVEFFEJhJDIz/9oADAMBAAIRAxEAPwD0ho0CGjUpzeqEgGpR9yDaof8AiM4n5qcqCh/4jOJ+amJToVkT26pEr3JqdCioSIQA8JQmJwKhgOKakcUBADkJLpLoAgrT2f6iqcm1Was9ONVpNqgkalOwoCWyAGtTZE6PaUkiVjoqS9V3BRs6gUso6J4KOPYq2OirJ27EVovA4JZe3air7M8fqlGK0gs+yEsvXQgDbbsCTeUrNiG9ZWMrRsUX/Fj4fVOe5Q0Z/wBq3h9SpFbErfoIQkUkCoQhAAlCAnIYCFISlKahACEiLoAgqT0o+CrSbVYqe1Crv2qCRAldsKAld1TwUANYkkTo9iSTelY6Kz9hUMY6B4qd+xQR9QcVWx0Vn9uzgnVI6H9wQ/t2IqRoEoxQm6/khR1nbeSEAdEXWaD4Iac2qa8fkJzBqeKsfpWjTpOwZw+pUyipewZwUquXhV9wQhCABCEIALpbpqUIYCkpELD5Xcoqfkzg8tbKGvlPQpob251/d4Abzu4lK3SJq+iTlByjwzAYw6vnvIepAzWR/lu8153Vfi6GVxZ6BIynadrHguPEEW9xHErkpxiGJyvqql80skpLnvcTZxP0H2HcsWtonwvJe3b4Kl5u6NCwdWeq4H+K2G4hUMgxWE0MjiGslz52EE6ZtNN2traX03d9JbNcG+y1jofFfMjGZ6ouja3JaxaRoPG382r1f8MOUTpXOwKtlDnxR5qS51DW9Znlu8AdwFmWS+hZY6VnoYSu2FCHdU8FYVCR7EkiWPYiRKxkVn7CoWdXzU7lAzfxVbHRA/tmoqNgSu7dibUbkoxl1XbFInv6yEAdC7sW8ERI5xrW+QSCZp0BsVMssUEcUpGrTdgy3cnvcIgXPNvErJfUPETzzjui0nR1ljurzK0OdI42JG3ale1FIvxaEsjOknxCNtuaGfvJ0HkmDEv+v4rnRVt71I2sb7Spe1I2r9Ogl2rNt2KBvaREjdlUkOIsf2jTF3HaFiiYWzHYnNkjeNubwQtif5ElpY68OiZNG7qSNdwdcps9VBTsdJPPHFGCLue8AC+xYTC98ziX5gwWDRsB/nzUVdTU+JGOkqmCWEuzlhJs62z5/BWfunXhm/YpP06KWohihdM9xygXu0XzDwG9ecY5hM+N4g/GcfYY6WJmSnomOJc1t7i9tbnaT9l2dPFT0sAhp42RxR9FrGAANHhZRVZuGCN7Wi4zE6WHgq8meUl0Pi14wlbOWayCow6SSCmYIWAtaebDHNI3WGhGzaSVg4rhMctM4CJud3BeiCoZO4UzGl0bxqXbSO9RT0NGyP0ZzWi+uY7Vmprs1tp9UeTQ8jcQjoJ6ukcyQRamItIMlhfT7LHwOqfDj2E1VP0JxWxtcQO94B94uF7Q6MUNO4Ri7G7r3XA4ZyZqMX5ewYhSRZMMgmZU1D9ABI05g0Dacxa3ZsuVowzblTM2xjUI8kewbSLbAkdsPBOt7LcoTXbDwW85Y1iJEMRJsKhjIruUDN/FTu2KBm/ikHRC/tmptTsCc/tmplVuSjFA9Z3FCkbv4oSgOrHVAF4suqp+lTxOAkc1XJXGWG4220usWnwbGMQkmk9JpoY4pMtn5i47DfZ428iualKUqR1rjGPy8Nrni+IlztCLFZedoYQdjgCFcHJ3HsgyupHs7+dc2/8A9VG7kpjuRjGy0BPSveR+l/7ddpVv0Mv4H19rFF9y6KLpmM2vAG8lV5MQiboyVt9zg7Yufe+V+Iy08kclU2KUsPNus24NuPjuXRUeFwztaSJoTbRpa23vF/iVW010zpxlGuQsWJ11N+ZE0VMO05SFo0uLUGI2EUhp6keq/TVNjwaGPVnQd7TOjfiE2pwSKcDnNXD1xo74IV+CS+m+16Pkxg4ZWWxDM2neMr37REdz/EbjvGh2XWtRVEFXKJ4J4pmhtszHhwtfwXNS4fXRRGEuFXTbmSGz2/pP3WVBJXYJIxtJE51NzuZ9mWe0bLd2Xfb5bFPIrnrqauL7O/rqhsAuuefi7ZK9wL+iwgN8NL7FjYpjNbKHOFNOYm7S2Jxt8FyzcZE1XUyQvAubDWxvYd6hJyMk4fTXZ6jh2KxyVZbG4F7GdI7ll8sKqWVjW0OSpnOhiBtmbv1vtXKxxyVdPKz0+SkYLF72es7dc2V3kVT14xPXCaqtpgw3qix5a2xscpOhO3Qa2vwTqLaqrEc4xdshw7HMTjhdS4mzLM85YZJHdJ47vEheocnMM/0rCYoHtyzPJklH9R7+82sPJSYbh8IpzJUUgzSSB7WyxglmU9E2Owjb36+C0XLbhxJfJnM2s/L4LwaU1+w8E4pj1pMn3Gs2JJE5qbJvUMZELtirs38VOVAzaeKQdEL+2aoqvYpX9s3gVFXHRqRjFZmzzQhmzzQoAz6GqzsZwWzg0mWsc3dMy/m39ifcubrad+E4i+Edi7pRE+yfts/ytCnqHhsc7Bd0RDrfNYEnjyHTklkxndwdizgoMTqfRKCpqLXcyM5R47B8VLTyNfTRSMN87btPf3LJ5VzBtCyIHWR+vAa/O3uXWnKouRysOPllUDzplAyGTncpLhrobEhb2HmzGkPLmnYTv/m8biowy8MYNrWLXX3G6ZSO5l5aHEa2IOw/uuO3bs9bXVI2mO0QSqrZE19XzOs4vD7bdreKEUuDLD2h2jt+iyK6ggqS+mqXSczKMrekRm3ffTwWo6UOhzx5ZAR0Dm0d5qtL+fHbm2MdbqyAEHvQNFs4/FOSUlKDPhz5ARsyvcHfArk66HEnS5qsVckjeiJJgXG3dfw1K9NkfUwGxibC3/rcbe5VqqJtUz8x+a43po5OJOTCsi7PMxPXGldA9+WJx6QAIvptXvv4cYxJjXJankmiiikp3GAiLRpygWsN2h2d99y8zq8FY53QXY/hZT+jVOJMbK7K1seZg6pcc1vMAfFa8OVN0jlbupwxWd2/rqN51T3HpFRuW04gia/YlTXoJEamyICR5SsZERVdvrcVYVZp6TuKrY6GP7byVevOjVO8/nhQVnWb+r6JRiOPqoToeoEKAL2NYT/qNEIxYTx9KIk217jx3rm8LeQZYJmlr2mzmuFi0jcV3V+9c7ynouZmixSHTKQyoHeNgd9PcqtnHyXJGnVyuL4sggp8XqDzdBXRU7Ixq2RpO0m9rfzVR4oZ4p4qeqmEsjLB7mg2JPHircdQ2kliqjpFfK8f0nb7rXWPWTOqZqiUbX9IHu1NvslnsN4uLNWpqpbDyLwjziKd0NiOcJy33vG7zHyUUhbbMOkL2NtoSVmWrpmzMJGbQkHVjx++qjZOZo3S5W883SaP1Tff+l3zusZ2o+FmGpto4hzRvO0KaOohe7mnu5t52A7Cs1xAj52IuMF7Ov1oyoZ3NcAypv0upUN2Higlqy7NS1lA4y4c5hicbugd1D4jeE6LF8RIv/pUT27CY5x9Qs6PEavDSBJ+dAToVfjrqKpHOMdkl7hoUWxeH5Hvxapsefwl+X+mRpVRj6OtdIKcyQzsPTgk0cOCdV4kyFnSde28bVys1XUYrizY8PcQ4NOaVvqtJ+ehUpNh8YnQTS5TzEThn3uOyMd57r7vFdZ+HUTIxXln/UP/AC++/Vc1TYZFSQXzSOkPSc7N0nO77/uup5HBrcPqA29+fsczQPVGgtof3V+t/wBDD+pP/HZ0jtp4ppKZdNc7RdHkeccR6aUyKTM4t7k5ya7FqhE16VNcVDGRG5VmnpuVhyrN67lWx0Mf2wVetOo4qd/bBVa7a3iUrGGtPQbwQopDq3ghQMdamzRMnifFKLskaWuHeDtRdIXd+xO1fQiuzj2RzOo6yhmN5KR+UH2m+qfgVnxyOEZyi7gyxHmV0VUxrcYqmf8AuwMceIzD6LmaU54JL8Pn91zcqqR6DRlyjZD6SKOV7nXNLL2n9J9rj3pZw+CZtVTdNzR1QdJYzu+qgH5kT4zoQfgoKar9Gg6bc1Pcg2GsfiPDwSI6FGuI2EtrKQh0UrLvYfWHceH7KF7I6cZHdOhlO/8A9M7lRZV+izW5wNpZ3Zo5b3ax/f8ApOwjcVY9Lje2Rj2ZHDoyxO9Q+HgfshgQzs9CPNzvBppOo52weazK976QizCGu1a+1wfdorzp5qWN0bJY5IRpzcmwjisyngNdiLKLDWyU76h2UROeHR7LnXcLC6mMbYmSSjG2dDyJwGfEqiPEq/IaOF5LInNzc64D5Akeem4rocRw6F3KkVTmAl1Ixjm2FgQ52tvO3ktnD6ZlFQU1NGGgRRhpy6Anf7zqq1VlGLRE7TF9VrnFRxnAexLLmtsZVUkPM6QM2bmW+idyec2KhdHldpM6++97W8dllLVH8s8FTwR/QqQfVmHyH2VeH/cnO28fZrsmztcfZ/n3SsfcX/n80KhpT+dM07LgjzSwno27h9j9SttnOEF43ygbSNPd+ysNccrbbb6+9Qv6LwT7P1H3TouzsfEFFhQ4i1Lf2dPosjEa2Zlm0LXSzOeDzYO7fwC2I9Y5Wn2ifkfuqtFE2Njg90hJebk2te/+AgkIS8xt59rWykXIadAoh2jlpNhidr0kvoEfW6SGBjv7byVet7SPiVuOwyPMHB7h7lj4pA6nlbmFwQbO3JWSjNn6zf0oUNafzW/pQlHO1JTC5NLkzNqrGxDB5RTuo8So6tozWY9rh7QBH3WPBGyKNzWCzXuLgNtgd30/hV/lVVRuFpXhkTBYuIvc9w77d25clFylpoJGtka7KxoY29iSB56lYM3cmeh0YcYJl9h5uuew7SPgqzmxxVropTaGbf7JSV80NXGyvw6Rr3M6zNhCsQ1FLidFebM07CRtae9Um+zGqmvw5z4pWmWik2xk28wnsjc6Nr2SulYxthMRdzW90jd48Rs+W56OyqpuYllZKWjoSN3jxWHJTS4XUgvc5sLjYSA9QouyKK80roTle4lu0dLNp3+I8VuchmRzcomSsmzOjhfI5oFjr0de7rfBYlXXMjdzNdTseM187Wg6d5G/yse8rpuQMENPWVT6dsMgnZ0JIi67Wg7HA+Xu8dLsaXIw7cm8ckjvcyysac+KspJG7C2Rp43bb5lXXS5NSLkbAmgseQXNu5uwaGyvytONHHwxlGV0QhzjT5nbwqfJs5o6098x+ACkxKsZBC973WtfRV+SExmoJ5m5cjpnn4NVWuvmXbL+BsxPy1RaPWbdSxdo4DYHm3x/ZVyGish/S74kKZmsjvI/D/K2eHP9JJeq7h/Pkli6zx/2B3vA/dRyuc2PXrNOvkb/ACuiGRpuGexp/be/wsglE8Wszrb2/K/7JGR250DiP55lOJtO07joPn9EjrNmDjstr7/3KgB8Z0U0TugeKrxsMd2O3GwUw2FMAPesbHX6R8StRxWTjXVj4/RKSYdSemP0hCbMemUJRjrHOsLm/kqOLYnR4VSmor6iOCO9m53Wzm17D3EqYzarzL8U6m+I0LZBeKKmc5nS2ve63/4CdLk6FtR7qyPHa/CJ6n0gSVVc+Q3AbM5keu65179gss+CuFI8yUzIae7cojiiBPm9wLr+fksWB7IfzHm8rhtHqjuH87u5SiRtsyshggl2WZN/NPx0jbONzvAbmDi3q5mD5G4+Cqy4xXUTnTwUFOXOFi+Jzhdvi0XvxsFnh2fw8E9r2t7/ACSywY39iY72wv5C03K2vfO10MQzXsI29K/h3rVo8frcWzwQxPrpCQObhpruAO5wDvie5c7O4U1SMRpnGGoiffnIjY3Ol/j8V0mEct+UtXLT4dRvhnnqHBkb3N2k7XHwABJ4KjJhil1E0Y93K+pSOlwnkPPiMTX45M6GNtstPGBnI7nOBI91z4ruMKwrDsIphTUFLHBENuQdY95O13mqNPVimnfSmYuZTQtfM47STfU+JsVLHiUU9O17HZA++UHaQFRySRdlc8j7ZV5Q45R4bC6SokF/VaNriuIrOX93Wp43WHesD8UMUe7FGU8UmUxtJLe+9rfIrgn1FROcrnab7WCsjg5dsz5M6j0juMU5XzYlKI9CwHUX0XRYNyyw3D8NgpTHW5426yMawC51Pra7e7cOC8yoxlar0bhv2LTHFGBlnllL09XpOXGGyOaZZZGOaQbyR6HzF/BdjR1dNWxtqKSaOSIjouabjv2+fwXz82oibotXAOUVXg1aKijku0kc7CT0ZQPr4qXBeoSz3YjKAQPAjuO77LPqJGUlQzmW8bb2fz5LQo42VlFDUw1D3w1EbZGHQXa4Aj6eafNhMM7LSySuOvSDgCB7kjTJtEQqGvjje3abe4HX4Iq3/mRnUBpOaycMEibmy1dW0G1hnbZvDRRP5PMdC9jcTxONr9HFkkYP/gimFonbVxvqOajcHPsC+3qfz6qzuVXDcHp8LhMUD5X22uksST4nRXHjoKUBWeVk4yfy2/q+i1XrIxrsBxSjIw3dYoSt2IQMdm/DKYa8xGf7AvHfxZhZFyjpRGwNjNI12gtdwc4fZe4Z7fuuZ5Y8mcJ5RwZK2HLUMB5ipjOV7OHePA6dytTopas8Ae/8vz/n0UcNU4GzndEjXvvci3wurmNYVVYJWvoK8agkskA6MjfDd5f5WTLfaNru/uTWRRcFY3PmY7ZoU+Ssa9oWVfLolDkWTRd594acuy66rknLHg2FVPKAkieT8uma1oJIvqP7naeXiuIc4jUOyka8dy6bkrVSVzoI5GMbBhrOd09d1+iXcNT5BU5m+Jfr1z/s76Gr5ihhw0VIOLYnUXrHk9mfWI8GMbYeIHen4hXw8/ic5JjpMMpmtYGkDpkE/BoH/wA1wTcTdIK/G57uaWmKBpPq3AvxJAWbjle2KhZQxTc7K93OVMjToXHXb/NBZZ1BtmyWRRTdmTiVXJW1MlROCZJDmdfdpoPIKszSyjc5KwPk0atvhzG2y7FPlIGZOknI1Js8bN7W/c8FXaxsI67M53lGd3tR+VkWQTNkcRmvZp9o3J81IyoLNmpVXrarY5KYJLyh5QU2HAOEbjmne31Ih1iPkPEhFkpHvn4ezuPIrBnSPzONN9Tb3DRdB6QqcEUVPDHBTxtjhjaGMjZbK0AaNFtieqrHosGoTTM5RJEWFDzK7KOKi9I/3GT2x/PqhwVSQ5aqB3ebfBRYUXXlY2OH/aj9S1nnQrF5RPy0YP8AWwe82QSZLB0UJ8PUCVQMdq6fTYqlRN0TfUW2JEJhDk+UuGUuKw8zVxc4PVN+kOBXkHKbDW4RX+iteXtyB4JGupIQhEfSWYxKG7UiE4h0HIfDqTFuUtLQYjBzkEzXtIzEahpIOnBdpB+GmFjHqiNs9SaNsYJYH2IueqTtI0QhJJ0OkR47yIwd1OKbDqqtZkJIh5zNGD32d9Fw9fyYfRSlr5+j4NF/mhCSMmO4qijLh8UMWcucTeyr6N6qEK6JTITMkzIQmIRPQ0ktfWwUlMA6aeQRsY42BcfFe+8jOTlHyaw/mIbS1UoDqioI1kPcO5o3D6lCFXIsR0bXJecshCQkZJUxRXc5+X3/AEUDsTg3Oc7y+6EJXJoeMUynW8paKhYTM9w01u0/S6zcN5Rw47Xx+jOc6OME6i3h4IQl5MfikdGXdELF5Rn/AGY/Wz5oQrLKkZ0DvywhCEAf/9k=',
              }}
              style={styles.cardImage}
            />
            <View style={styles.fullcard}>
              <Text style={styles.cardTitle}>PDF</Text>
              <Text style={styles.cardDescription}>
                Lorem ipsum dolor sit amet.
              </Text>
              <Text style={styles.cardDescription}>
                Lorem ipsum dolor sit amet.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  head: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 100,
  },
  image: {
    width: 20,
    height: 20,
    //position: 'absolute',
    top: 15,
    left: -10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    height: 90,
    width: '100%',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#354169',
  },

  viewimage: {
    width: 10,
    height: 10,
    top: -15,
    marginLeft: 55,
  },
  card: {
    height: '25%',
    width: '100%',
    backgroundColor: '#354169',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  pdfCard: {
    backgroundColor: '#f4b400',
  },
  cardContent: {
    alignItems: 'flex-start',
  },
  cardImage: {
    width: 110,
    height: 150,
    borderRadius: 25,
    marginBottom: 10,
  },
  cardTitle: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardDescription: {
    marginBottom: 10,
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  fullcard: {
    top: -130,
    marginLeft: 130,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#354169',
    marginTop: 20,
    marginBottom: 10,
  },
  subheadingText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
    fontWeight: '900',
  },
});
