import { Image, View } from "react-native";


export default function ImageComponent() {
        return (
<View style={{ flex: 1, justifyContent: 'center' }}>
 <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://picsum.photos/100/100' }} />

 </View>
    );
}
