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

#### How Animation actually played on the screen?
- Computations by JS thread, Animations by Native OS which involved following steps
  - Compute
  - Serialize
  - Transfer it over the bridge to host OS
  - Deserialize
  - Run the Frame instead of Animations to avoid frame loss as we are computing lot of things in JS thread
- Everrything done by Native OS
  - Before animation starts -> Serialize the whole animations thing
  - Native OS would Deserialize it
  - Run
    - No more over the bridge transfers
    - JS thread is now free for other computations
    - Smoother animations
