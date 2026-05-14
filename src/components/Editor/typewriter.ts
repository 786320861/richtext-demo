import { HTMLText } from "leafer-editor";

// --------------------------
// 3. 工具：提取所有文本节点 + 逐字替换
// --------------------------
function getTextNodes(element: HTMLElement) {
    const nodes: Node[] = []
    function traverse(el: Node) {
        if (el.nodeType === 3) {
            nodes.push(el)
        } else {
            el.childNodes.forEach(child => traverse(child))
        }
    }
    traverse(element)
    return nodes;
}

// --------------------------
// 4. 打字机主逻辑（安全、不破坏标签）
// --------------------------
function startTypeWriter(HTMLTextNode: HTMLText, html: string, speed = 50) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const textNodes = getTextNodes(doc.body)

    const allTexts = textNodes.map(n => n.textContent)
    const allLength = allTexts.join('').length

    let charIndex = 0

    function type() {
        let current = 0
        textNodes.forEach((node, idx) => {
            const text = allTexts[idx]
            if (current + text!.length <= charIndex) {
                node.textContent = text!
            } else {
                node.textContent = text!.slice(0, Math.max(0, charIndex - current))
            }
            current += text!.length
        });

        const newHTML = doc.body.innerHTML
        HTMLTextNode.text = newHTML

        if (charIndex < allLength) {
            charIndex++
            setTimeout(type, speed)
        }
    }

    type()
}

export function typewriter(HTMLTextNode: HTMLText) {
    const originText = HTMLTextNode!.text as string;
    startTypeWriter(HTMLTextNode, originText)
}