
-- ----------------------------
-- Table structure for userInformation
-- ----------------------------
DROP TABLE IF EXISTS `userInformation`;
CREATE TABLE `userInformation` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_no` varchar(20) NOT NULL,
  `user_sex` varchar(20) NOT NULL DEFAULT '1' COMMENT '类型：1是男，2为女',
  `user_email` varchar(100) DEFAULT NULL,
  `user_intro` varchar(200),
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_no` (`user_no`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `userInformation` VALUES ('1', '阿一', '男', '111@163.com','我是一条鱼');
INSERT INTO `userInformation` VALUES ('2', '阿二', '男', '222@21cn.com','我是一条鱼');
INSERT INTO `userInformation` VALUES ('3', '阿三', '男', '333@yeah.net','我是一条鱼');
INSERT INTO `userInformation` VALUES ('4', '阿四', '男', '444@sina.com.cn','我是一条鱼');
INSERT INTO `userInformation` VALUES ('5', '阿五', '男', '555@tom.com','我是一条鱼');
INSERT INTO `userInformation` VALUES ('6', '阿六', '男', '666@xiyou.edu.cn','我是一条鱼');
INSERT INTO `userInformation` VALUES ('7', '阿七', '男', 'xiaozhao@163.com','我是一条鱼');
INSERT INTO `userInformation` VALUES ('8', '阿八', '女', 'xiaowang@yeah.net','我是一条鱼');
INSERT INTO `userInformation` VALUES ('9', '阿九', '女', 'xiaotian@sina.com.cn','我是一条鱼');
INSERT INTO `userInformation` VALUES ('10', '阿十', '女', 'xiaohu@tom.com','我是一条鱼');
INSERT INTO `userInformation` VALUES ('11', '丫丫', '女', 'xiaoqian@yahoo.com.cn','我是一条鱼');
INSERT INTO `userInformation` VALUES ('12', '哈哈', '男', 'laozhao@163.com','我是一条鱼');
INSERT INTO `userInformation` VALUES ('13', '趴趴', '男', 'laowang@yeah.net','我是一条鱼');
INSERT INTO `userInformation` VALUES ('14', '嘻嘻', '女', 'laotian@sina.com.cn','我是一条鱼');
INSERT INTO `userInformation` VALUES ('15', '呼呼', '女', 'laohu@tom.com','我是一条鱼');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_no` varchar(20) NOT NULL COMMENT '用户名',
  `user_pass` varchar(20) NOT NULL DEFAULT '123456' COMMENT '密码',
  `head_path` varchar(500) DEFAULT '' COMMENT '头像路径',
  PRIMARY KEY (`user_no`),
  FOREIGN KEY (`user_no`) REFERENCES `userInformation` (`user_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='登陆信息表';

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('阿一', '123456', '');
INSERT INTO `user` VALUES ('阿二', '123456', '');
INSERT INTO `user` VALUES ('阿三', '123456', '');
INSERT INTO `user` VALUES ('阿四', '123456', '');
INSERT INTO `user` VALUES ('阿五', '123456', '');
INSERT INTO `user` VALUES ('哈哈', '123456', '');
INSERT INTO `user` VALUES ('嘻嘻', '123456',  '');
INSERT INTO `user` VALUES ('呼呼', '123456', '');

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `task_id`   int(11) NOT NULL AUTO_INCREMENT,
  `task_name` varchar(200) DEFAULT NULL,
  `task_maker` varchar(200) DEFAULT NULL,
  `task_time` datetime DEFAULT NULL,
  `task_introduction` varchar(2000) DEFAULT NULL,
  `process_1` varchar(200) DEFAULT NULL,
  `process_2` varchar(200) DEFAULT NULL,
  `process_3` varchar(200) DEFAULT NULL,
  `process_4` varchar(200) DEFAULT NULL,
  `process_5` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`task_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='任务信息表';

-- ----------------------------
-- Records of task
-- ----------------------------
INSERT INTO `task` VALUES ('1','英语日计划','哈哈' ,'2017-08-10 11:14:43','我是一个学习英语的计划','学习音标','记单词','练口语',null,null);
INSERT INTO `task` VALUES ('2','跑步日计划','哈哈' ,'2017-08-10 11:14:43','我是一个每天锻炼跑步的计划','每天跑步',null,null,null,null);
INSERT INTO `task` VALUES ('3','练字日计划', '哈哈','2017-08-10 11:14:43','我是一个练字的计划','学习笔画','记汉字','练习字体',null,null);

-- ----------------------------
-- Table structure for application
-- ----------------------------
DROP TABLE IF EXISTS `application`;
CREATE TABLE `application` (
  `apply_id` int(11) NOT NULL AUTO_INCREMENT,
  `process_name` varchar(200) NOT NULL,
  `task_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `infor` varchar(100) DEFAULT NULL,
  `submit_time` datetime DEFAULT NULL,
  PRIMARY KEY (`apply_id`),
  FOREIGN KEY (`task_id`) REFERENCES `task` (`task_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `userInformation` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='申请状态表';

-- ----------------------------
-- Records of application
-- ----------------------------
INSERT INTO `application` VALUES ('1','学习音标', '1', '3', 'github.com',null);
INSERT INTO `application` VALUES ('2','学习音标', '1', '1', 'github.com','2017-08-11 11:19:19');
INSERT INTO `application` VALUES ('3','学习音标', '1', '5', 'github.com',null);
INSERT INTO `application` VALUES ('4','练习字体', '3', '3', 'github.com','2017-08-11 11:28:37');

-- ----------------------------
-- Table structure for process
-- ----------------------------

DROP TABLE IF EXISTS `process`;
CREATE TABLE `process` (
  `task_id`   int(11) NOT NULL,
  `user_no`   varchar(20) NOT NULL,
  `process_1` tinyint(4) NOT NULL DEFAULT '-1' COMMENT '类型：0为待确认，1是完成，-1为未提交',
  `process_2` tinyint(4) NOT NULL DEFAULT '-1' COMMENT '类型：0为待确认，1是完成，-1为未提交',
  `process_3` tinyint(4) NOT NULL DEFAULT '-1' COMMENT '类型：0为待确认，1是完成，-1为未提交',
  `process_4` tinyint(4) NOT NULL DEFAULT '-1' COMMENT '类型：0为待确认，1是完成，-1为未提交',
  `process_5` tinyint(4) NOT NULL DEFAULT '-1' COMMENT '类型：0为待确认，1是完成，-1为未提交',
  PRIMARY KEY (`task_id`,`user_no`),
  FOREIGN KEY (`task_id`) REFERENCES `task` (`task_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`user_no`) REFERENCES `user` (`user_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='个人进度表';
-- ----------------------------
-- Records of application
-- ----------------------------
INSERT INTO `process` VALUES ('1', '阿一','-1','-1','-1','-1','-1');
INSERT INTO `process` VALUES ('1', '阿二','-1','-1','-1','-1','-1');
INSERT INTO `process` VALUES ('2', '哈哈','-1','-1','-1','-1','-1');
INSERT INTO `process` VALUES ('3', '阿四','-1','-1','-1','-1','-1');






