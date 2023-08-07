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
            fontSize={1}
            fillOpacity={0.6}
            position={[-5, 0, -20]}
          >
            wimitim
          </Text>
          <Text
            color={"black"}
            letterSpacing={-0.05}
            font="/Inter-Bold.woff"
            fontSize={1}
            fillOpacity={0.6}
            position={[0, 0, 6]}
          >
            Director word
          </Text>
          <Text
            color={"yellow"}
            letterSpacing={-0.05}
            font="/Inter-Bold.woff"
            fontSize={1}
            fillOpacity={0.6}
            position={[0, 0, 12]}
          >
            New arrivals
          </Text>
          <Text
            color={"green"}
            letterSpacing={-0.05}
            font="/Inter-Bold.woff"
            fontSize={1}
            fillOpacity={0.6}
            position={[5, 0, 18]}
          >
            Birthday
          </Text>
          <Text
            color={"red"}
            letterSpacing={-0.05}
            font="/Inter-Bold.woff"
            fontSize={0.8}
            fillOpacity={0.6}
            position={[-5, 1, 24]}
          >
            Your weather
          </Text>
          <Text
            color={"pink"}
            letterSpacing={-0.05}
            font="/Inter-Bold.woff"
            fontSize={1}
            fillOpacity={0.6}
            position={[0, 0, 40]}
          >
            welcome
          </Text>
        </Billboard>
      </Center>
    </>
  );
}
