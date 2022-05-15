const sorteadorEngine = {

    init() {
        this.controller.displayElements()
        this.controller.addP()
    },
    variable: {
        position: 0,
        participants: [],
    },
    controller: {
        displayElements() {
            let el = sorteadorEngine.elements

            document.body.appendChild(el.container)
            el.container.appendChild(el.header)
            el.container.appendChild(el.all)
            el.container.appendChild(el.vencCont)

            el.all.appendChild(el.box)
            el.box.appendChild(el.input)
            el.box.appendChild(el.addButt)
            el.box.appendChild(el.sortButt)


            el.all.appendChild(el.listC)
            el.listC.appendChild(el.partitle)
            el.listC.appendChild(el.list)

            el.vencCont.appendChild(el.nomeV)
            el.vencCont.appendChild(el.exitV)
            el.exitV.appendChild(el.imgV)


            el.container.classList.add('container')
            el.header.innerHTML = 'Sorteador'
            el.header.classList.add('header')
            el.all.classList.add('all')
            el.box.classList.add('box')
            el.input.classList.add('input')
            el.input.placeholder = 'Nome do participante'
            el.addButt.classList.add('butt')
            el.addButt.innerHTML = 'Adicionar'
            el.sortButt.classList.add('butt')
            el.sortButt.innerHTML = 'Sortear'
            el.sortButt.addEventListener('click', this.sortear)
            el.listC.classList.add('listC')
            el.partitle.classList.add('partitle')
            el.partitle.innerHTML = 'Participantes:'
            el.list.classList.add('list')
            el.vencCont.classList.add('vencedorCont')
            el.nomeV.classList.add('vencedorNome')
            el.exitV.classList.add('xVencedor')
            el.exitV.addEventListener('click', this.exitV)
            el.imgV.classList.add('imgV')
            el.imgV.src = './img/back-arrow.png'



        },
        addP() {
            let el = sorteadorEngine.elements
            el.addButt.onclick = () => {
                if (el.input.value != '') {
                    this.createData()
                    this.createMemberBox()
                    el.list.style.display = 'flex'
                    sorteadorEngine.variable.position++
                    el.input.value = ''
                }
            }
        },
        createData() {
            let data = {
                id: sorteadorEngine.variable.position,
                name: sorteadorEngine.elements.input.value,
            }
            sorteadorEngine.variable.participants.push(data)
        },
        currentName() {
            return sorteadorEngine.variable.participants.length - 1
        },
        createMemberBox() {
            let member = document.createElement('div')
            let nameM = document.createElement('div')
            let x = document.createElement('div')
            let partic = sorteadorEngine.variable.participants
            member.classList.add('member')
            nameM.classList.add('name')
            x.classList.add('x')
            member.id = sorteadorEngine.variable.position

            sorteadorEngine.elements.list.appendChild(member)
            member.appendChild(nameM)
            member.appendChild(x)
            nameM.innerHTML = partic[this.currentName()].name
            x.innerHTML = 'x'

            x.onclick = () => {
                let index = partic.findIndex(obj => {
                    return obj.name === nameM.innerHTML
                })
                // esse findIndex esta analisando todo o array e retornando o index do obj com nome igual ao nameM
                member.parentNode.removeChild(member)
                partic.splice(index, 1)

            }
        },
        sortear() {
            let el = sorteadorEngine.elements
            let partic = sorteadorEngine.variable.participants
            let numero = parseInt(Math.random() * partic.length)
            if (partic.length != 0) {

                el.nomeV.innerHTML = `O vencedor do sorteio é: ${partic[numero].name}!`
                el.vencCont.style.display = 'flex'
                console.log(sorteadorEngine.variable.participants.length)
            }

        },
        exitV() {
            sorteadorEngine.elements.vencCont.style.display = 'none'
        }

    },
    elements: {
        container: document.createElement('div'),
        header: document.createElement('div'),
        all: document.createElement('div'),
        box: document.createElement('div'),
        input: document.createElement('input'),
        addButt: document.createElement('button'),
        sortButt: document.createElement('button'),
        listC: document.createElement('div'),
        partitle: document.createElement('div'),
        list: document.createElement('div'),
        vencCont: document.createElement('div'),
        nomeV: document.createElement('div'),
        exitV: document.createElement('div'),
        imgV: document.createElement('img'),
    }
}

sorteadorEngine.init()