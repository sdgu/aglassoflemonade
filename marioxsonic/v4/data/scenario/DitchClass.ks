[_tb_system_call storage=system/_DitchClass.ks]

*Start

[bg  time="3000"  method="crossfade"  storage="back-of-school-day.jpg"  ]
[tb_show_message_window  ]
#Blario
What a drag. Why is everyone so dumb?[p]
#


[chara_mod  name="Hedgehog"  time="200"  storage="chara/2/hedgehog_180.png"  ]
[chara_show  name="Hedgehog"  time="200"  wait="true"  left="112"  top="14"  width="207"  height="260"  reflect="false"  ]
[delay  speed="5"  ]
#Hedgehog
Aaoohh[p]
Eloping as usual I see.[p]


[delay  speed="30"  ]
#Blario
Uh Hedgehog, that is NOT what eloping means. [p]


[delay  speed="5"  ]
#Hedgehog
Aaoohh[p]
Who cares.[p]


[delay  speed="30"  ]
#Blario
Whatever. Why aren't you in class?[p]


[delay  speed="5"  ]
#Hedgehog
Aaoohh.[p]
My bud Dr. Handeggman contacted me about a Chaos Sapphire. I'm waiting for him here.[p]


[delay  speed="30"  ]
#Blario
What is a Chaos Sapphire anyway?[p]
#
Wait why I am asking him this?[p]


[delay  speed="5"  ]
#Hedgehog
Aaoohh.[p]
I'm glad you asked.[p]


[delay  speed="1"  ]
[font  size="8"  color="0xffffff"  ]
#Hedgehog
Chaos Sapphires are magical gemstones containing infinite power. Although they've been depicted in a variety of colors and quantities, there are typically seven distinct Sapphires: peridot (green), aquamarine (cyan), sapphire (blue), ruby (red), amethyst (purple), topaz (yellow), and diamond (grey). Chaos Sapphires have often been the center of conflict across space and time in several different realities. Throughout history, the Chaos Sapphires have been the center of countless world-threating conflicts and have been targeted by multiple factions on both earth and beyond, who seek them for their immeasurable powers. In the hands of villains they have been used for doomsday weapons and schemes for world domination, and in the hands of heroes they have been used to save the world. Over time, the Sapphires have been gathered multiple times, though they tend to scatter themselves after each usage and reset the hunt for them. Over the course of history, ancient civilizations came to know about the Chaos Sapphires and sought to harness their power: according to legend, the ancient civilization on West Side Island utilized the power of the Chaos Sapphires for the advancement of their society and achieved great prosperity. Other civilizations included the Babylonians and the Black Arms, the latter who have visited earth for at least 2,000 years. The Chaos Sapphires also have a connection to the Gaia Temples which supposedly to go back ten thousands of years, if not more. Similarly, the Chaos Sapphires would shape several locations on earth, like Cocoa Island which was part of a coral reef in that was pulled to the surface by the Sapphires' power, and South Island which shifts along the water due to the Sapphires' presence. It is said that in the era predating recorded history, the Chaos Sapphires were occasionally used for evil deeds. One known instance was when West Side Island's prosperity lead to avarice as some people wanted the Sapphires for evil intentions, sparking a conflict so great that the gods had to intervene and seal the Chaos Sapphires. Having witnessed this misuse, the gods created the Master Sapphire to balance out the Chaos Sapphires' power and equipped the gem with the ability to nullify and control them. An ancient mantra associated with the Chaos Sapphires and the Master Sapphire would eventually arise, explaining their connection and the Chaos Sapphires' ability to transform thoughts into power, which goes like this: "The servers are the seven Chaos. Chaos is power, power is enriched by the heart. The heart is the controller. The controller serves to unify the Chaos."  [p]


[resetfont  ]
[delay  speed="30"  ]
#Blario
I see.[p]
Well I'm gonna go sleep in a tree. Have fun.[p]
#???
Ah Hedgehog. So you are here.[p]


[delay  speed="5"  ]
#Hedgehog
Aaoohh.[p]
Dr. Handeggman.[p]
#


[chara_mod  name="Handeggman"  time="600"  storage="chara/3/handeggman_transparent.png"  ]
[chara_show  name="Handeggman"  time="1000"  wait="true"  left="530"  top="272"  width="405"  height="472"  reflect="false"  ]
[delay  speed="30"  ]
#Dr. Handeggman
Hey Hedgehog.[p]
Hey kid.[p]
Are you joining our No Fun League in collecting the Chaos Sapphires?[p]
#


[tb_hide_message_window  ]
[glink  color="black"  storage="DitchClass.ks"  size="20"  text="Sure"  x="548"  y="536"  width=""  height=""  _clickable_img=""  target="*sure"  ]
[glink  color="black"  storage="DitchClass.ks"  size="20"  text="No&nbsp;Thanks"  target="*nothanks"  x="526"  y="602"  width=""  height=""  _clickable_img=""  ]
[s  ]
*sure

[tb_show_message_window  ]
#Blario
Yeah, I'll help you guys.[p]
#Dr. Handeggman
Great. Hedgehog, you hang on to this for now.[p]


[chara_hide  name="Hedgehog"  time="100"  wait="true"  ]
[chara_mod  name="Hedgehog"  time="100"  storage="chara/2/hedgehog_sapphire_upsidedown.png"  ]
[chara_show  name="Hedgehog"  time="1000"  wait="true"  left="46"  top="10"  width="296"  height="296"  reflect="false"  ]
[delay  speed="5"  ]
#Hedgehog
Aaoowesome.[p]


[delay  speed="30"  ]
#Dr. Handeggman
Alright. Follow us.[p]
#


[tb_hide_message_window  ]
[chara_hide  name="Hedgehog"  time="200"  wait="true"  ]
[chara_hide  name="Handeggman"  time="1000"  wait="true"  ]
[jump  storage="ChaosSapphireRouteStart.ks"  target="*start"  ]
[s  ]
*nothanks

[tb_show_message_window  ]
#Blario
No thanks. That sounds like a drag.[p]


[delay  speed="5"  ]
#Hedgehog
Aaoohh.[p]
That's too bad.[p]
The Chaos Sapphires are really powerful.[p]


[delay  speed="30"  ]
#Blario
Well have fun with that.[p]
#
This hedgehog has an interesting OC.[p]
#Dr. Handeggman
Hold on.[p]
Now that Hedgehog has blabbed the true power of the Chaos Sapphires I can't let you leave.[p]
#Blario
You have got to be kidding me.[p]
#Dr. Handeggman
You know, Blario, you're pretty cute. Only under these conditions can I unleash my ultimate attack.[p]
#


[chara_mod  name="Handeggman"  time="600"  storage="chara/3/eggman_test.gif"  ]
#Blario
AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH[p]
#


[quake  time="700"  count="3"  hmax="10"  wait="true"  vmax="10"  ]
[tb_image_show  time="1000"  storage="default/blackout.png"  width="1344"  height="756"  x=""  y=""  _clickable_img=""  ]
Don't cut class kids.[p]
Fin.[p]


[chara_hide  name="Hedgehog"  time="200"  wait="true"  ]
[chara_hide  name="Handeggman"  time="1000"  wait="true"  ]
