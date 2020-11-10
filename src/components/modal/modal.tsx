import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
import { CloseOutlined } from '@ant-design/icons-vue'
import { install } from '../../utils/install'
import { $tools } from '../../utils/tools'
import { getSlot, getSlotContent } from '../../utils/props'
import getModalPropTypes from './props'
import MiPopup from './popup'
import MiTeleport from './teleport'

const Modal = defineComponent({
    name: 'MiModal',
    inheritAttrs: false,
    props: {...getModalPropTypes()},
    methods: {
        getDefaultFooter(prefixCls: string) {
            return (
                <div class={`${prefixCls}-btns`}>
                    <Button type="default" class={`${prefixCls}-btn`}>
                        { () => getSlotContent(this, 'cancelText') || '取消' }
                    </Button>
                    <Button type="primary" class={`${prefixCls}-btn-primary`}>
                        { () => getSlotContent(this, 'okText') || '确定' }
                    </Button>
                </div>
            )
        }
    },
    render() {
        const {
            prefixCls: customizePrefixCls,
            visible,
            container,
            forceRender
        } = this.$props
        const prefixCls = $tools.getPrefixCls('modal', customizePrefixCls)
        const closeIcon = getSlotContent(this, 'closeIcon')
        const renderCloseIcon = (
            <span class={`${prefixCls}-close-x`}>
                { closeIcon || <CloseOutlined class={`${prefixCls}-close-icon`}></CloseOutlined> }
            </span>
        )
        const footer = getSlotContent(this, 'footer')
        let props = {
            ...this.$props,
            ...this.$attrs,
            prefixCls,
            title: getSlotContent(this, 'title'),
            footer: footer === undefined ? this.getDefaultFooter(prefixCls) : footer,
            closeIcon: renderCloseIcon
        }
        if (container === false) {
            return (
                <MiPopup {...props}>{ () => getSlot(this) }</MiPopup>
            )
        }
        return (
            <MiTeleport
                visible={visible}
                forceRender={forceRender}
                container={container}
                children={(child: any) => {
                    props = {...props, ...child}
                    return <MiPopup {...props}>{ () => getSlot(this) }</MiPopup>
                }}
            />
        )
    }
})
export default install(Modal)