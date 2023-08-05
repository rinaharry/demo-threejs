import { Billboard, Center, Text } from "@react-three/drei";
import SkyBox from "./Skybox";

export default function Scene() {
  return (
    <>
      <Center>
        <SkyBox />
        <Billboard position={[0, -1.0, 0]}>
          <Text
            userData={{ lensflare: "no-occlusion" }} //Add this to make lens flare ignore occlusion
            color={"black"}
            letterSpacing={-0.05}
            font="/Inter-Bold.woff"
            fontSize={3}
            fillOpacity={0.6}
            position={[0,0, 0]}
          >
            1
          </Text>
          <Text
            color={"black"}
            letterSpacing={-0.05}
            font="/Inter-Bold.woff"
            fontSize={3}
            fillOpacity={0.6}
            position={[0,0, 6]}
          >
            2
          </Text>
          <Text
            color={"yellow"}
            letterSpacing={-0.05}
            font="/Inter-Bold.woff"
            fontSize={3}
            fillOpacity={0.6}
            position={[0,0, 12]}
          >
            3
          </Text>
          <Text
            color={"green"}
            letterSpacing={-0.05}
            font="/Inter-Bold.woff"
            fontSize={3}
            fillOpacity={0.6}
            position={[0,0, 18]}
          >
            4
          </Text>
          <Text
            color={"red"}
            letterSpacing={-0.05}
            font="/Inter-Bold.woff"
            fontSize={3}
            fillOpacity={0.6}
            position={[0,0, 24]}
          >
            FLARE
          </Text>
          <Text
            color={"pink"}
            letterSpacing={-0.05}
            font="/Inter-Bold.woff"
            fontSize={3}
            fillOpacity={0.6}
            position={[0,0, 30]}
          >
            6
          </Text>
        </Billboard>
      </Center>
    </>
  );
}
