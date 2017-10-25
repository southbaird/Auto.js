package com.stardust.scriptdroid.ui.floating.layoutinspector;

import android.content.Context;
import android.view.ContextThemeWrapper;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;

import com.afollestad.materialdialogs.MaterialDialog;
import com.afollestad.materialdialogs.Theme;
import com.stardust.enhancedfloaty.FloatyService;
import com.stardust.scriptdroid.R;
import com.stardust.scriptdroid.autojs.AutoJs;
import com.stardust.scriptdroid.ui.floating.FullScreenFloatyWindow;
import com.stardust.view.accessibility.NodeInfo;
import com.stardust.widget.BubblePopupMenu;

import java.util.Arrays;

/**
 * Created by Stardust on 2017/3/12.
 */

public class LayoutHierarchyFloatyWindow extends FullScreenFloatyWindow {

    private static final String TAG = "FloatingHierarchyView";
    private static final int COLOR_SHADOW = 0xddffffff;

    private LayoutHierarchyView mLayoutHierarchyView;
    private MaterialDialog mNodeInfoDialog;
    private BubblePopupMenu mBubblePopMenu;
    private NodeInfoView mNodeInfoView;
    private NodeInfo mSelectedNodeInfo;
    private Context mContext;
    private NodeInfo mRootNode;
    private NodeInfo mSelectedNode;

    public LayoutHierarchyFloatyWindow(NodeInfo rootNode) {
        mRootNode = rootNode;
    }


    @Override
    protected View inflateView(FloatyService service) {
        mContext = new ContextThemeWrapper(service, R.style.AppTheme);
        mLayoutHierarchyView = new LayoutHierarchyView(mContext) {
            @Override
            public boolean dispatchKeyEvent(KeyEvent event) {
                if (event.getKeyCode() == KeyEvent.KEYCODE_BACK && event.getAction() == KeyEvent.ACTION_UP) {
                    close();
                    return true;
                }
                return super.dispatchKeyEvent(event);
            }
        };
        setupView();
        return mLayoutHierarchyView;
    }

    private void setupView() {
        mLayoutHierarchyView.setBackgroundColor(COLOR_SHADOW);
        mLayoutHierarchyView.setShowClickedNodeBounds(true);
        mLayoutHierarchyView.getBoundsPaint().setStrokeWidth(3);
        mLayoutHierarchyView.getBoundsPaint().setColor(0xFFD32F2F);
        mLayoutHierarchyView.setOnItemLongClickListener(new LayoutHierarchyView.OnItemLongClickListener() {
            @Override
            public void onItemLongClick(View view, NodeInfo nodeInfo) {
                mSelectedNodeInfo = nodeInfo;
                ensureOperationPopMenu();
                if (mBubblePopMenu.getContentView().getMeasuredWidth() <= 0)
                    mBubblePopMenu.preMeasure();
                mBubblePopMenu.showAsDropDown(view, view.getWidth() / 2 - mBubblePopMenu.getContentView().getMeasuredWidth() / 2, 0);
            }
        });
        mLayoutHierarchyView.setRootNode(mRootNode);
        if (mSelectedNode != null)
            mLayoutHierarchyView.setSelectedNode(mSelectedNode);
    }

    private void ensureOperationPopMenu() {
        if (mBubblePopMenu != null)
            return;
        mBubblePopMenu = new BubblePopupMenu(mContext, Arrays.asList(
                mContext.getString(R.string.text_show_widget_infomation),
                mContext.getString(R.string.text_show_layout_bounds)));
        mBubblePopMenu.setOnItemClickListener(new BubblePopupMenu.OnItemClickListener() {
            @Override
            public void onClick(View view, int position) {
                mBubblePopMenu.dismiss();
                if (position == 0) {
                    showNodeInfo();
                } else {
                    showLayoutBounds();
                }
            }
        });
        mBubblePopMenu.setWidth(ViewGroup.LayoutParams.WRAP_CONTENT);
        mBubblePopMenu.setHeight(ViewGroup.LayoutParams.WRAP_CONTENT);
    }

    private void showLayoutBounds() {
        close();
        LayoutBoundsFloatyWindow window = new LayoutBoundsFloatyWindow(mRootNode);
        window.setSelectedNode(mSelectedNode);
        FloatyService.addWindow(window);
    }


    void showNodeInfo() {
        ensureNodeInfoDialog();
        mNodeInfoView.setNodeInfo(mSelectedNodeInfo);
        mNodeInfoDialog.show();
    }

    private void ensureNodeInfoDialog() {
        if (mNodeInfoDialog == null) {
            mNodeInfoView = new NodeInfoView(mContext);
            mNodeInfoDialog = new MaterialDialog.Builder(mContext)
                    .customView(mNodeInfoView, false)
                    .theme(Theme.LIGHT)
                    .build();
            if (mNodeInfoDialog.getWindow() != null)
                mNodeInfoDialog.getWindow().setType(WindowManager.LayoutParams.TYPE_PHONE);
        }
    }


    public void setSelectedNode(NodeInfo selectedNode) {
        mSelectedNode = selectedNode;
    }
}
