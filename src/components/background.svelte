<script type="ts">
	import { MeshStandardMaterial, TorusGeometry } from 'three';
	import { T, Canvas, OrbitControls } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { degToRad } from 'three/src/math/MathUtils';
	const scale = spring(1);
	const x = 20;
	const y = 3;
	const z = 5;
</script>

<div>
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[21, 20, 25]} fov={24}>
			<OrbitControls
				maxPolarAngle={degToRad(80)}
				autoRotate={true}
				autoRotateSpeed={4}
				enableZoom={false}
				enablePan={true}
				target={{ y: 0.5 }}
			/>
		</T.PerspectiveCamera>

		<T.DirectionalLight position={[3, 10, 12]} />
		<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.4} />

		<T.Mesh
			interactive
			position={[0, y, 0]}
			castShadow
			rotation={[0.5, 0.5, 0]}
			geometry={new TorusGeometry(2, 1, 40, 100, 6.3)}
			material={new MeshStandardMaterial({ color: '#ffc0cb', metalness: 0.5, roughness: 0 })}
		/>
	</Canvas>
</div>

<style>
	div {
		height: 100%;
		width: 100%;
	}
</style>
