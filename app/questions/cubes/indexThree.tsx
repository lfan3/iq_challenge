"use client"

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import colorPalettes from "@/app/utils/colors";
import * as THREE from 'three';

interface IBox {
    faceColors: string[];
}

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
    const [rotation, setRotation] = useState([Math.PI / 4, Math.PI / 4, 0]);

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    // Rotate the cube every frame
    //   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    useFrame(({ mouse }) => {
        // 根据鼠标的位置更新旋转角度
        if (active) {
            setRotation([mouse.y * Math.PI, mouse.x * Math.PI, 0]);
        }
    });

    return (
        <mesh
            {...props}
            ref={mesh}
            //   scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
            rotation={rotation}
        >
            <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
            <meshStandardMaterial
                // color={hovered ? 'hotpink' : 'yellow'} 
                color={props.color}
                metalness={0.7}
                roughness={0.3} />
        </mesh>
    );
}

const ColorfulBox: React.FC<IBox> = ({ faceColors }) => {

    const [rotation, setRotation] = useState([0, -1, 0]);
    const [position, setposition] = useState([0, 0, 0]);
    const meshRef = useRef();

    // // 使用 useFrame 钩子来监听每一帧的渲染
    // useFrame(({ mouse }) => {
    //     // 根据鼠标的位置更新立方体的位置
    //     setRotation([mouse.y * Math.PI, mouse.x * Math.PI, 0]);
    // });

    return (
        <div className='w-1/3'>
        <Canvas >
            <ambientLight intensity={2} />
            <directionalLight position={[10, 0, 10]} intensity={.8} />

            <mesh ref={meshRef} position={position} rotation={rotation}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial
                    attach="material"
                    color={faceColors[0]} // 正X面
                />
                <meshStandardMaterial
                    attach="material-1"
                    color={faceColors[1]}  // 负X面
                />
                <meshStandardMaterial
                    attach="material-2"
                    color={faceColors[2]}  // 正Y面
                />
                <meshStandardMaterial
                    attach="material-3"
                    color={faceColors[3]}  // 负Y面
                />
                <meshStandardMaterial
                    attach="material-4"
                    color={faceColors[4]}  // 正Z面
                />
                <meshStandardMaterial
                    attach="material-5"
                    color="purple"  // 负Z面
                    metalness={0.7}
                    roughness={0.3}
                />
            </mesh>
        </Canvas>
        </div>

    );
}


// todo
// box rotate according mouse
// write some letter on each face of cube
// place for input

const faceColors1 = [
    'red',    // 正X面
    'red',  // 负X面
    'blue',   // 正Y面
    'blue', // 负Y面
    'yellow',   // 正Z面
    'yellow' // 负Z面
];

const faceColors2 = [
    'red',    // 正X面
    'red',  // 负X面
    'blue',   // 正Y面
    'blue', // 负Y面
    'yellow',   // 正Z面
    'yellow' // 负Z面
];


export default function Cube({ selectedQ }) {

    return (
        <div className="w-[468px] w-4/12 h-[32rem] flex flex-col items-center justify-center rounded relative border border-4" style={{ borderColor: colorPalettes[+selectedQ % 10] }}>
            <div className='flex w-full'>
                <ColorfulBox faceColors={faceColors2} />
                <ColorfulBox faceColors={faceColors2} />
                <ColorfulBox faceColors={faceColors2} />
            </div>
            <div className='flex w-full'>
                <ColorfulBox faceColors={faceColors2} />
                <ColorfulBox faceColors={faceColors2} />
                <ColorfulBox faceColors={faceColors2} />
            </div>
        </div>
    );
}