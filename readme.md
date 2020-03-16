# 调用其它组件

组件A(如zj-001)调用组件B(如zj-002)，组件B进行操作之后返回结果给A。

## 注意

从设计上来讲，组件间的调用不应过多，如果组件间调用过多，请检查是否组件的划分不合理。

## 参数和返回值

在A向B调用时，往往会向B发送一个到多个实参，B拿到实参后进行逻辑处理，并可能会返回一个结果R给A。

如在A中

zj-001/a001.ts

```ts
// 调用其它组件
/**
 * 组件B返回的结果
 */
const r$CURRENT_SECONDS_UNIX = await(() => {
	const p1 = 'zj-002';	// 被调用的组件编号,如'zj-001','zj-002'
	const p2 = 'a001';	// 被调用组件的响应名，如'a001','a002
	const e1 = 'mm';
	const e2 = 'studio';
	return aw18(p1, p2, e1, e2); // 这里e1,e2,...为不固定个数参数，根据实际情况修改。在被调用组件的响应文件中，可以使用多个形（从第二个参数开始）参直接接收这些参数
})();
// r$CURRENT_SECONDS_UNIX === 'mmstudio';
```

在组件B中进行逻辑处理

zj-002/a001.ts

```ts
export default async function a001(mm: aw1, e1: string, e2: string) {
	console.log('received arguments:', e1, e2);
	return e2;	// 这里返回结果给组件A
}
```
