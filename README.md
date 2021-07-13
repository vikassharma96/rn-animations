## rn-animations

React Native provides two complementary animation systems
- <b>`Animated`</b> for granular and interactive control of specific values 
- <b>`LayoutAnimation`</b> for animated global layout transactions.

<details>
    <summary>How Animation work in React Native?</summary>    
<pre>
For Animation to work we need a Value (any number) and this Value should transformed into some other Value. For eg to
move an object from x = 0, y = 0 to x = 100 and y = 50 coordinate on the screen and if we moving in a linear fashion 
then react will interpolate all the endpoints like (0, 0) => (10, 5) => (100, 50) we have some views which act on those
values and update their internal states. <b>Animated.Value()</b>
</pre>
</details>

```
const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

Animated.timing(value, {
  toValue: {x: 100, y: 100},
  duration: 1000,
  useNativeDriver: false,
}).start();

<Animated.View style={value.getLayout()}>
  <View />
</Animated.View>
```
